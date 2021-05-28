import socketio
import commands.commands as cmd
import yaml
from sensorLibrary.Temperature import TemperatureSensor

sio = socketio.Client()
config = yaml.safe_load(open("./config.yaml"))

tempSensor = TemperatureSensor()

@sio.on(cmd.GET_TEMPERATURE)
def on_message(data):
    print(f'INFO: Recieved command: {GET_TEMPERATURE}')


@sio.event
def connect():
    print('connection established')

@sio.on('RBP_GIVE_WATER')
def handleGiveWater():
    print('got command to handle water')


@sio.event
def disconnect():
    print('disconnected from server')

try:
    sio.connect(config['server_address'])
    sio.wait()
except Exception as err:
    print("[ERROR] Something went wrong when intializing the client:")
    print(err)