from app.model.users import User

from app import app, db
from app.model import response
from flask import request
from flask_jwt_extended import *
from datetime import datetime, timedelta

def formatJWT(data):
    data = {
        'id': data.id,
        'username': data.username,
        'email': data.email,
        'password': data.password,
        'level': data.level
    }
    return data

@app.route('/login', methods=['POST'])
def login():
    try:
        username = request.json["username"]
        password = request.json["password"]

        user = User.query.filter_by(username=username).first()
        
        if not user:
            return response.badRequest({}, "tidak ada data user")

        if not user.checkPassword(password):
            return response.badRequest({}, "Password salah!")
        
        data = formatJWT(user)

        expires = timedelta(days=7)
        expires_refresh = timedelta(days=7)

        access_token = create_access_token(data, fresh=True, expires_delta=expires)
        refresh_token = create_refresh_token(data, expires_delta=expires_refresh)

        return response.success({
            "data": data,
            "access_token": access_token,
            "refresh_token": refresh_token,
        }, "Login sukses")
    except Exception as e:
        return response.badRequest({}, e)
