from app.model.users import User

from app import app, db
from app.model import response
from flask import request
from flask_jwt_extended import *
from datetime import datetime, timedelta

def formatDataUser(data):
    data = {
        'id': data.id,
        'username': data.username,
        'email': data.email,
        'password': data.password,
        'file_converted_piano': data.file_converted_piano,
        'file_converted_guitar': data.file_converted_guitar,
        'report_sent': data.report_sent,
        'level': data.level,
        'created_at': data.created_at,
        'updated_at': data.updated_at,
        'deleted_at': data.deleted_at,
    }
    return data

def formatArray(data):
    arr = []
    for i in data:
        arr.append(formatDataUser(i))
    return arr

@app.route('/users', methods=['GET'])
def getAllUser():
    try:
        user = User.query.filter(User.deleted_at==None)
        data = formatArray(user)
        return response.success(data, "success")
    except Exception as e:
        return response.badRequest({}, str(e))

@app.route('/users/<id>', methods=['GET'])
def getOneUser(id):
    try: 
        user = User.query.filter_by(id=id).filter(User.deleted_at==None).first()

        if not user:
            return response.badRequest({}, "tidak ada data user")
        
        return response.success(formatDataUser(user), "success")

    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/users', methods=['POST'])
def createUser():
    try:
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")
        level = request.form.get("level")

        user = User(username=username, email=email, password=password, level=level)
        user.setPassword(password)
        db.session.add(user)
        db.session.commit()

        return response.success(formatDataUser(user), "Sukses menambah data user")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    try:
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")

        user = User.query.filter_by(id=id).filter(User.deleted_at==None).first()
        
        if not user:
            return response.badRequest({}, "tidak ada data user")

        user.username = username
        user.email = email
        # user.password = password
        user.setPassword(password)
        
        db.session.commit()

        return response.success(formatDataUser(user), "Sukses update data user")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    try:
        user = User.query.filter_by(id=id).filter(User.deleted_at==None).first()
        
        if not user:
            return response.badRequest({}, "tidak ada data user")

        # db.session.delete(user)
        user.deleted_at = datetime.utcnow
        db.session.commit()

        return response.success(formatDataUser(user), "Sukses hapus data user")
    
    except Exception as e:
        return response.badRequest({}, str(e))

            