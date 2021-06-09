import eventlet
#eventlet.monkey_patch()
from flask import Flask
from flask_cors import CORS
import threading

import socketio
import time
import constants.commands as raspberryCommands
import constants.response as raspberryResponses
from sensorLibrary.Temperature import TemperatureSensor
from sensorLibrary.SoilMoisture import SoilMoistureSensor


tempSensor = TemperatureSensor()
soilSensor = SoilMoistureSensor()

sio = socketio.Server(cors_allowed_origins='192.168.1.233:3000')
app = Flask(__name__)

allowedOrigins = {'/*' : {'origins': '192.168.1.233:3000'}}
CORS(app, resources = allowedOrigins, supports_credentials = True)

class Server(threading.Thread):
    def __init__(self, thread_id):
        threading.Thread.__init__(self)
        self.threadId = thread_id
    
    def run(self):
        print(f'starting: {self.name}')
        serve()

def serve():
    if __name__ == '__main__':
        global app
        app = socketio.Middleware(sio, app)
        eventlet.wsgi.server(eventlet.listen(('', 9025)), app)

def index(request):
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')

@sio.on('connect')
def connect(*args):
    print('connection established')
    # while True:
    #     temperatures = tempSensor.read_temp()
    #     # soilMoisture = soilSensor.read_soil_moisture()
    #     soilMoisture = 56
    #     sio.emit('confirm_connection', {'temp': temperatures, 'soilMoisture': soilMoisture})
    #     sio.sleep(1)
    sio.emit('confirm_connection')



# server_thread = Server('server-thread')
# server_thread.start()
app = socketio.Middleware(sio, app)
eventlet.wsgi.server(eventlet.listen(('', 9025)), app)