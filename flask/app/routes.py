from app import app

from flask_jwt_extended import get_jwt_identity, jwt_required
from app.model import response
from app.controller import AuthController, FAQController, ReportsController, SeederController, UsersController, CookieController, PerformancesController, ConverterController

@app.route('/')
def index():
    return "Hello Flask App"

@app.route('/cobaProtected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return response.success(current_user, 'sukses')