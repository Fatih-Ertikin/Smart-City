from aiohttp import web
import socketio
import constants.commands as cmd
import constants.response as res
import yaml
from sensorLibrary.Temperature import TemperatureSensor


## creates a new Async Socket IO Server
sio = socketio.AsyncServer()
## Creates a new Aiohttp Web Application
app = web.Application()
# Binds our Socket.IO server to our Web App
## instance
sio.attach(app)

config = yaml.safe_load(open("./config.yaml"))

tempSensor = TemperatureSensor()

async def index(request):
    return 'TEST WEBPAGE'

@sio.event
def connect(sid, environ, auth):
    print('connect ', sid)

@sio.on(cmd.GIVE_WATER)
def handleGiveWater():
    print('got command to handle water')
    emit(res.GIVE_WATER, { 'result': True })

@sio.on(cmd.GET_TEMPERATURE)
def handleGetTemperature():
    temp_c, temp_f = TemperatureSensor().read_temp()
    print(f'got command | result: {temp_c}')
    return None, temp_c


@sio.event
def disconnect(sid):
    print('disconnect ', sid)


app.router.add_get('/', index)

if __name__ == "__main__":
    print(f'running server app...')
    web.run_app(app)

    
