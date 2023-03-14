from app.model.users import Users
from app.model.faqs import FAQ
from app.model.reports import Report

from app import app, db
from app.model import response

from faker import Faker
import random

@app.route('/seeds/<records>', methods=['POST'])
def seed(records):
    faker = Faker()
    
    try:
        for i in range(int(records)):
            username = faker.name()
            password = "123"
            email = (username.split()[0])+"@ggmail.com"
            piano = random.randint(0, 10)
            guitar = random.randint(0, 10)
            report = random.randint(0, 10)

            user = Users(username=username, email=email, password=password, file_converted_piano=piano, file_converted_guitar=guitar, report_sent=report)
            user.setPassword(password)
            db.session.add(user)
        db.session.commit()

        for i in range(int(records)):
            question = faker.sentence()
            answer = faker.sentence()

            faq = FAQ(question=question, answer=answer)
            db.session.add(faq)
        db.session.commit()

        ids = Users.query.with_entities(Users.id).all()
        arr_id = []
        for i in ids:
            arr_id.append(i[0])

        for i in range(int(records)):
            title = faker.sentence()
            description = faker.sentence()
            reporter = random.choice(arr_id)

            report = Report(title=title, description=description, reporter=reporter)
            db.session.add(report)
        db.session.commit()

        return response.success({}, "success")
    except Exception as e:
        return response.badRequest({}, str(e))