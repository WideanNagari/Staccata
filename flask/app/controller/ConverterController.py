from app.model.users import Users

from app import app, db
from app.model import response
from flask import request
from flask_jwt_extended import *
from datetime import datetime
import os
import time
import numpy as np
# import soundfile as sf
# from pydub import AudioSegment
from helper import PostProcessingHelper as post_helper
from helper import PreProcessingHelper as pre_helper

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

@app.route('/convert', methods=['POST'])
def convert():
    try:
        initial_song = request.files["song"]
        initial = request.json["initial"]
        print(initial_song)
        print("========================")
        print(initial_song.__dict__)

        timestamp = int(datetime.timestamp(datetime.now()))
        filename_initial = initial_song.filename[:-4]+"_"+str(timestamp)+".mp3"
        initial_song.save(os.path.join(app.config['UPLOAD_FOLDER'], filename_initial))

        # while not os.path.exists(filename_initial):
            # time.sleep(1)

        # if os.path.isfile(filename_initial):
            # file_awal = pre_helper.mp3_to_mel(filename_initial)
            # if (initial=='Piano'):
                # convert to guitar
                # prediction = post_helper.predict(file_awal, model)
            # else :
                # convert to piano
                # prediction = post_helper.predict(file_awal, model)
            
            # # post-processing
            # prediction = np.array(prediction)
            # prediction = post_helper.lh_pass_melspec(prediction, 22050, 100, 'high')
            # prediction = post_helper.lh_pass_melspec(prediction, 22050, 1000, 'low')

            # convert to waveform
            # hasil = post_helper.mel_to_wave(prediction)
        
            # save jadi wav
            # filename_target_wav = ".wav"
            # sf.write(os.path.join(app.config['UPLOAD_FOLDER'], filename_target_wav), hasil, 22050, subtype='PCM_24')
            
            # while not os.path.exists(filename_target_wav):
                # time.sleep(1)

            # if os.path.isfile(filename_target_wav):
                # convert to mp3
                # sound = AudioSegment.from_wav('stereo_file.wav')
                # timestamp = int(datetime.timestamp(datetime.now()))
                # filename_target = initial_song.filename[:-4]+"_"+str(timestamp)+".mp3"
                # sound.export(os.path.join(app.config['UPLOAD_FOLDER'], filename_target), format='mp3')

            # bersihkan file initial & wav
            # os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename_initial))
            # os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename_target_wav))

        return response.success({
            # "filename": filename_target
        }, "success")
    except Exception as e:
        return response.badRequest({}, e)