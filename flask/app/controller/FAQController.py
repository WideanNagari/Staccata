from app.model.faqs import FAQ

from app import app, db
from app.model import response
from flask import request
from datetime import datetime

def formatDataFAQ(data):
    data = {
        'id': data.id,
        'question': data.question,
        'answer': data.answer,
        'created_at': data.created_at,
        'updated_at': data.updated_at,
        'deleted_at': data.deleted_at,
    }
    return data

def formatArrayFAQ(data):
    arr = []
    for i in data:
        arr.append(formatDataFAQ(i))
    return arr

@app.route('/faq', methods=['GET'])
def getAllFAQ():
    try:
        faq = FAQ.query.filter(FAQ.deleted_at==None)
        data = formatArrayFAQ(faq)
        return response.success(data, "success")
    except Exception as e:
        return response.badRequest({}, str(e))

@app.route('/faq/<id>', methods=['GET'])
def getOneFAQ(id):
    try: 
        faq = FAQ.query.filter_by(id=id).filter(FAQ.deleted_at==None).first()

        if not faq:
            return response.badRequest({}, "tidak ada data FAQ")
        
        return response.success(formatDataFAQ(faq), "success")

    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/faq', methods=['POST'])
def createFAQ():
    try:
        question = request.form.get("question")
        answer = request.form.get("answer")

        faq = FAQ(question=question, answer=answer)
        db.session.add(faq)
        db.session.commit()

        return response.success(formatDataFAQ(faq), "Sukses menambah data FAQ")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/faq/<id>', methods=['PUT'])
def updateFAQ(id):
    try:
        question = request.form.get("question")
        answer = request.form.get("answer")

        faq = FAQ.query.filter_by(id=id).filter(FAQ.deleted_at==None).first()
        
        if not faq:
            return response.badRequest({}, "tidak ada data FAQ")

        faq.question = question
        faq.answer = answer
        
        db.session.commit()

        return response.success(formatDataFAQ(faq), "Sukses update data FAQ")
    
    except Exception as e:
        return response.badRequest({}, str(e))
    
@app.route('/faq/<id>', methods=['DELETE'])
def deleteFAQ(id):
    try:
        faq = FAQ.query.filter_by(id=id).filter(FAQ.deleted_at==None).first()
        
        if not faq:
            return response.badRequest({}, "tidak ada data FAQ")

        faq.deleted_at = datetime.utcnow
        # db.session.delete(faq)
        db.session.commit()

        return response.success(formatDataFAQ(faq), "Sukses hapus data FAQ")
    
    except Exception as e:
        return response.badRequest({}, str(e))

            