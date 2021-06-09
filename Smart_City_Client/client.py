import eventlet
from flask import Flask
from flask_cors import CORS

import socketio
import time
import constants.commands as raspberryCommands
import constants.response as raspberryResponses
from sensorLibrary.Temperature import TemperatureSensor
from sensorLibrary.SoilMoisture import SoilMoistureSensor


tempSensor = TemperatureSensor()
soilSensor = SoilMoistureSensor()


sio = socketio.Server(cors_allowed_origins='http://localhost:3000')

app = Flask(__name__)
allowedOrigins = {'/*' : {'origins': 'http://localhost:3000'}}
CORS(app, resources = allowedOrigins, supports_credentials = True)

sio.attach(app)


def index(request):
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')

@sio.event
def connect(*args):
    print('connection established')
    while True:
        temperatures = tempSensor.read_temp()
        # soilMoisture = soilSensor.read_soil_moisture()
        soilMoisture = 56
        sio.emit('confirm_connection', {'temp': temperatures, 'soilMoisture': soilMoisture})
        sio.sleep(1)



app = socketio.Middleware(sio, app)
eventlet.wsgi.server(eventlet.listen(('127.0.0.1', 8080)), app)