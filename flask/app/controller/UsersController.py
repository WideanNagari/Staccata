from app.model.users import User

from app import app, db
from app.model import response
from flask import request
from flask_jwt_extended import *
from datetime import datetime, timedelta

def formatData(data):
    data = {
        'id': data.id,
        'username': data.username,
        'email': data.email,
        'password': data.password,
        'level': data.level,
        'created_at': data.created_at,
        'updated_at': data.updated_at,
    }
    return data

def formatJWT(data):
    data = {
        'id': data.id,
        'username': data.username,
        'email': data.email,
        'password': data.password,
        'level': data.level
    }
    return data

def formatArray(data):
    arr = []
    for i in data:
        arr.append(formatData(i))
    return arr

@app.route('/users', methods=['GET'])
def getAll():
    try:
        user = User.query.all()
        data = formatArray(user)
        return response.success(data, "success")
    except Exception as e:
        return response.badRequest({}, e)

@app.route('/users/<id>', methods=['GET'])
def getOne(id):
    try: 
        user = User.query.filter_by(id=id).first()

        if not user:
            return response.badRequest({}, "tidak ada data user")
        
        return response.success(formatData(user), "success")

    except Exception as e:
        return response.badRequest({}, e)
    
@app.route('/users', methods=['POST'])
def create():
    try:
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")
        level = request.form.get("level")

        user = User(username=username, email=email, password=password, level=level)
        user.setPassword(password)
        db.session.add(user)
        db.session.commit()

        return response.success(formatData(user), "Sukses menambah data user")
    
    except Exception as e:
        return response.badRequest({}, e)
    
@app.route('/users/<id>', methods=['PUT'])
def update(id):
    try:
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")

        user = User.query.filter_by(id=id).first()
        
        if not user:
            return response.badRequest({}, "tidak ada data user")

        user.username = username
        user.email = email
        # user.password = password
        user.setPassword(password)
        
        db.session.commit()

        return response.success(formatData(user), "Sukses update data user")
    
    except Exception as e:
        return response.badRequest({}, e)
    
@app.route('/users/<id>', methods=['DELETE'])
def delete(id):
    try:
        user = User.query.filter_by(id=id).first()
        
        if not user:
            return response.badRequest({}, "tidak ada data user")

        db.session.delete(user)
        db.session.commit()

        return response.success(formatData(user), "Sukses hapus data user")
    
    except Exception as e:
        return response.badRequest({}, e)

            