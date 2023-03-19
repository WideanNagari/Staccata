from app.model.performances import Performances
from app.model.users import Users
from app.controller.UsersController import formatDataUser

from app import app, db
from app.model import response
from flask import request
from datetime import datetime

def formatDataPerformance(data, user):
    data = {
        'id': data.id,
        'title': data.title,
        'initial': data.initial,
        'target': data.target,
        'user': user,
        'duration': data.duration,
        'accuracy': data.accuracy,
        'loss': data.loss,
        'like_status': data.like_status,
        'created_at': data.created_at.strftime('%A, %d %B %Y %H:%M:%S'),
        'updated_at': data.updated_at.strftime('%A, %d %B %Y %H:%M:%S'),
        'deleted_at': data.deleted_at.strftime('%A, %d %B %Y %H:%M:%S') if data.deleted_at else data.deleted_at
    }
    return data

def formatArrayPerformance(data):
    arr = []
    for i in data:
        user = Users.query.filter_by(id=i.user).first()
        data_user = formatDataUser(user)
        arr.append(formatDataPerformance(i, data_user))
    return arr

@app.route('/performances', methods=['GET'])
def getAllPerformance():
    try:
        performances = Performances.query.all()

        data = formatArrayPerformance(performances)

        return response.success(data, "success")
    except Exception as e:
        return response.badRequest({}, str(e))

@app.route('/performances/summary', methods=['GET'])
def getPerformanceSummary():
    try: 
        like = Performances.query.filter_by(like_status=1).count()
        dislike = Performances.query.filter_by(like_status=0).count()
        songs = len(Performances.query.all())
        
        return response.success({
            "like": like,
            "dislike": dislike,
            "converted": songs
        }, "success")

    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/performances/<id>', methods=['GET'])
def getOnePerformance(id):
    try: 
        performance = Performances.query.filter_by(id=id).first()

        if not performance:
            return response.badRequest({}, "tidak ada data performance")
        
        user = Users.query.filter_by(id=performance.user).first()
        data_user = formatDataUser(user)
        
        return response.success(formatDataPerformance(performance, data_user), "success")

    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/performances', methods=['POST'])
def createPerformance():
    try:
        user = request.json["user"]
        title = request.json["title"]
        initial = request.json["initial"]
        target = request.json["target"]
        duration = request.json["duration"]
        accuracy = request.json["accuracy"]
        loss = request.json["loss"]

        performance = Performances(user=user, title=title, initial=initial, target=target, duration=duration, accuracy=accuracy, loss=loss)
        db.session.add(performance)
        db.session.commit()

        user = Users.query.filter_by(id=performance.user).first()
        data_user = formatDataUser(user)

        return response.success(formatDataPerformance(performance, data_user), "Add performance data success")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/performances/<id>', methods=['PUT'])
def updatePerformance(id):
    try:
        user = request.json["user"]
        title = request.json["title"]
        initial = request.json["initial"]
        target = request.json["target"]
        duration = request.json["duration"]
        accuracy = request.json["accuracy"]
        loss = request.json["loss"]

        performance = Performances.query.filter_by(id=id).filter(Performances.deleted_at==None).first()
        
        if not performance:
            return response.badRequest({}, "tidak ada data performance")

        performance.title = title
        performance.initial = initial
        performance.target = target
        performance.duration = duration
        performance.accuracy = accuracy
        performance.loss = loss
        performance.updated_at = datetime.now()
        
        db.session.commit()

        user = Users.query.filter_by(id=performance.user).first()
        data_user = formatDataUser(user)

        return response.success(formatDataPerformance(performance, data_user), "Update performance data success")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/performances/<id>', methods=['DELETE'])
def deletePerformance(id):
    try:
        performance = Performances.query.filter_by(id=id).first()
        
        if not performance:
            return response.badRequest({}, "tidak ada data performance")
        
        if(performance.deleted_at==None):
            performance.deleted_at = datetime.now()
        else:
            performance.deleted_at = None

        db.session.commit()

        user = Users.query.filter_by(id=performance.user).first()
        data_user = formatDataUser(user)

        return response.success(formatDataPerformance(performance, data_user), "Delete performance data success")
    
    except Exception as e:
        return response.badRequest({}, str(e))
            
@app.route('/performances/vote/<id>', methods=['PUT'])
def votePerformance(id):
    try:
        vote = request.json["vote"]

        performance = Performances.query.filter_by(id=id).filter(Performances.deleted_at==None).first()
        
        if not performance:
            return response.badRequest({}, "tidak ada data performance")

        performance.like_status = vote
        performance.updated_at = datetime.now()
        
        db.session.commit()

        user = Users.query.filter_by(id=performance.user).first()
        data_user = formatDataUser(user)

        return response.success(formatDataPerformance(performance, data_user), "Performance vote success")
    
    except Exception as e:
        return response.badRequest({}, str(e))