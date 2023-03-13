from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*":{
        "origins": "*"
    }
})
app.config.from_object(Config)
db = SQLAlchemy(app)
Migrate = Migrate(app, db)

jwt = JWTManager(app)

from app.model import faqs, reports, users
from app import routes