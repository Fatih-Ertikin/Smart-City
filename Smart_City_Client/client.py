import socketio
import commands.commands as cmd
import yaml
import sensorLibrary.Temperature

sio = socketio.Client()
config = yaml.safe_load(open("./config.yaml"))

tempSensor = TemperatureSensor()

@sio.on(cmd.GET_TEMPERATURE)
def on_message(data):
    

@sio.event
def connect():
    print('connection established')

@sio.event
def my_message(data):
    print('message received with ', data)
    sio.emit('my response', {'response': 27})

@sio.event
def disconnect():
    print('disconnected from server')

try:
    sio.connect(config['server_address'])
    sio.wait()
except Exception as err:
    print("[ERROR] Something went wrong when intializing the client:")
    print(err)