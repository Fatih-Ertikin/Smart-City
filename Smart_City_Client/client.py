import socketio
import constants.commands as cmd
import constants.response as res
import yaml
from sensorLibrary.Temperature import TemperatureSensor

sio = socketio.Client()
config = yaml.safe_load(open("./config.yaml"))

tempSensor = TemperatureSensor()

@sio.on(cmd.GET_TEMPERATURE)
def handleGetTemperature:
    temp_c, temp_f = TemperatureSensor().read_temp()
    print(f'got command | result: {temp_c}')
    return temp_c

@sio.event
def connect():
    print('connection established')

@sio.on(cmd.GIVE_WATER)
def handleGiveWater():
    print('got command to handle water')
    sio.emit(res.GIVE_WATER, { 'result': True })


@sio.event
def disconnect():
    print('disconnected from server')

try:
    sio.connect(config['server_address'])
    sio.wait()
except Exception as err:
    print("[ERROR] Something went wrong when intializing the client:")
    print(err)