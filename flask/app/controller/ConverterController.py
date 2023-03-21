from app.model.users import Users

from app import app, db
from app.model import response
from flask import request
from flask_jwt_extended import *
from flask import send_file
from datetime import datetime
import os

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
        print(initial_song)
        print("========================")
        print(initial_song.__dict__)

        timestamp = int(datetime.timestamp(datetime.now()))
        filename = initial_song.filename[:-4]+"_"+str(timestamp)+".mp3"
        initial_song.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return response.success({
            "filename": filename,
        }, "success")
    except Exception as e:
        return response.badRequest({}, e)