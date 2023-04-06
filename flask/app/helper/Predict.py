import os
import torch
from torch.autograd import Variable
from app.GAN.Generator import Generator

def load_model():
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'GAN', 'Model_1.pth')
    model = Generator()
    model.load_state_dict(torch.load(path, map_location=torch.device('cpu')))
    return model

model = load_model()

def predict(data):
    print("predicting")
    prediction = []
    with torch.no_grad():
        for i in range(len(data)):
            xt = Variable(torch.from_numpy(data[i]).type(torch.float32)).unsqueeze(0)
            y_hat = model(xt).squeeze(0)
            prediction.append(y_hat.numpy())
    return prediction