from app.model.users import Users

from app import app, db
from app.model import response
from flask import request
from flask_jwt_extended import *
from datetime import datetime
import os
import time
import numpy as np
import soundfile as sf
from pydub import AudioSegment
import ffmpeg
import torch
from app.helper import PostProcessingHelper as post_helper
from app.helper import PreProcessingHelper as pre_helper
from app.helper import Predict

# def formatJWT(data):
#     data = {
#         'id': data.id,
#         'username': data.username,
#         'first_name': data.first_name,
#         'last_name': data.last_name,
#         'email': data.email,
#         'level': data.level,
#         'file_converted_piano': data.file_converted_piano,
#         'file_converted_guitar': data.file_converted_guitar,
#         'report_sent': data.report_sent
#     }
#     return data

@app.route('/convert/<initial>', methods=['POST'])
def convert(initial):
    try:
        initial_song = request.files["song"]

        timestamp = int(datetime.timestamp(datetime.now()))
        filename_initial = initial_song.filename[:-4]+"_"+str(timestamp)+".mp3"
        initial_full_path = os.path.join(app.config['UPLOAD_FOLDER'], filename_initial)
        initial_song.save(initial_full_path)
        
        print(os.path.exists(initial_full_path))
        while not os.path.exists(initial_full_path):
            time.sleep(1)
        
        if os.path.isfile(initial_full_path):
            print("mp3 to mel")
            file_awal = pre_helper.mp3_to_mel(initial_full_path)
            print(file_awal.shape)
            print("matrix to vector")
            file_awal = pre_helper.matrix_to_vector(file_awal)
            print(file_awal.shape)

            if(initial=="Piano"):
                 a = 1
            elif(initial=="Guitar"):
                 a = 2

            prediction = Predict.predict(file_awal)
            
            # post-processing
            print("post-processing...")
            prediction = np.array(prediction)
            prediction = prediction.transpose()
            print("Applying filter...")
            prediction = post_helper.lh_pass_melspec(prediction, 22050, 100, 'high')
            prediction = post_helper.lh_pass_melspec(prediction, 22050, 1000, 'low')

            # convert to waveform
            print("converting back to waveform")
            hasil = post_helper.mel_to_wave(prediction)
            
            # save jadi wav
            print("saving wav...")
            filename_target_wav = initial_song.filename[:-4]+"_"+str(timestamp)+".wav"
            target_full_path = os.path.join(app.config['UPLOAD_FOLDER'], filename_target_wav)
            sf.write(target_full_path, hasil, 22050, subtype='PCM_24')
            
            while not os.path.exists(target_full_path):
                time.sleep(1)

            if os.path.isfile(target_full_path):
                # convert to mp3
                print("converting to mp3...")
                sound = AudioSegment.from_wav(target_full_path)
                timestamp = int(datetime.timestamp(datetime.now()))
                filename_target = initial_song.filename[:-4]+"_"+str(timestamp)+".mp3"
                print(target_full_path)
                sound.export(os.path.join(app.config['UPLOAD_FOLDER'], filename_target), format='mp3')

            # bersihkan file initial & wav
            print("finishing...")
            os.remove(initial_full_path)
            os.remove(target_full_path)
            print("done!")

        return response.success({
            "filename": filename_target
        }, "success")
    except Exception as e:
        return response.serverError({}, e)