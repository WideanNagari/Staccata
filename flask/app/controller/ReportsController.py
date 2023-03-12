from app.model.reports import Report
from app.model.users import User
from app.controller.UsersController import formatDataUser

from app import app, db
from app.model import response
from flask import request
from datetime import datetime

def formatDataReport(data, reporter):
    data = {
        'id': data.id,
        'title': data.title,
        'description': data.description,
        'reporter': reporter,
        'created_at': data.created_at,
        'updated_at': data.updated_at,
        'deleted_at': data.deleted_at,
    }
    return data

def formatArrayReport(data):
    arr = []
    for i in data:
        user = User.query.filter_by(id=i.reporter).first()
        data_user = formatDataUser(user)
        arr.append(formatDataReport(i, data_user))
    return arr

@app.route('/reports', methods=['GET'])
def getAllReport():
    try:
        report = Report.query.filter(Report.deleted_at==None)

        data = formatArrayReport(report)

        return response.success(data, "success")
    except Exception as e:
        return response.badRequest({}, str(e))

@app.route('/reports/<id>', methods=['GET'])
def getOneReport(id):
    try: 
        report = Report.query.filter_by(id=id).filter(Report.deleted_at==None).first()

        if not report:
            return response.badRequest({}, "tidak ada data report")
        
        user = User.query.filter_by(id=report.reporter).first()
        data_user = formatDataUser(user)
        
        return response.success(formatDataReport(report, data_user), "success")

    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/reports', methods=['POST'])
def createReport():
    try:
        title = request.form.get("title")
        description = request.form.get("description")
        reporter = request.form.get("reporter")

        report = Report(title=title, description=description, reporter=int(reporter))
        db.session.add(report)
        db.session.commit()

        user = User.query.filter_by(id=report.reporter).first()
        data_user = formatDataUser(user)

        return response.success(formatDataReport(report, data_user), "Sukses menambah data report")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/reports/<id>', methods=['PUT'])
def updateReport(id):
    try:
        title = request.form.get("title")
        description = request.form.get("description")
        reporter = request.form.get("reporter")

        report = Report.query.filter_by(id=id).filter(Report.deleted_at==None).first()
        
        if not report:
            return response.badRequest({}, "tidak ada data report")

        report.title = title
        report.description = description
        report.reporter = int(reporter)
        
        db.session.commit()

        user = User.query.filter_by(id=report.reporter).first()
        data_user = formatDataUser(user)

        return response.success(formatDataReport(report, data_user), "Sukses update data report")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/reports/<id>', methods=['DELETE'])
def deleteReport(id):
    try:
        report = Report.query.filter_by(id=id).filter(Report.deleted_at==None).first()
        
        if not report:
            return response.badRequest({}, "tidak ada data report")


        report.deleted_at = datetime.utcnow
        # db.session.delete(report)
        db.session.commit()

        user = User.query.filter_by(id=report.reporter).first()
        data_user = formatDataUser(user)

        return response.success(formatDataReport(report, data_user), "Sukses hapus data report")
    
    except Exception as e:
        return response.badRequest({}, str(e))
            