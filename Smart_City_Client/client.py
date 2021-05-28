from flask import Flask, Response
from flask import render_template
from flask_socketio import SocketIO, emit
import constants.commands as cmd
import constants.response as res
import yaml
from sensorLibrary.Temperature import TemperatureSensor

config = yaml.safe_load(open("./config.yaml"))

tempSensor = TemperatureSensor()

app = Flask(__name__)

sio = SocketIO(app,ping_timeout=3,ping_interval=1)

@sio.event
def connect():
    print('connection established')

@sio.on(cmd.GIVE_WATER)
def handleGiveWater():
    print('got command to handle water')
    sio.emit(res.GIVE_WATER, { 'result': True })

@sio.on(cmd.GET_TEMPERATURE)
def handleGetTemperature():
    temp_c, temp_f = TemperatureSensor().read_temp()
    print(f'got command | result: {temp_c}')
    return None, temp_c


@sio.event
def disconnect(sid):
    print(f'client disconnected: {sid}')

if __name__ == "__main__":
	sio.run(app,host="192.168.2.41")
