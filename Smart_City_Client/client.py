from aiohttp import web
import socketio
import constants.commands as raspberryCommands
import constants.response as raspberryResponses
from sensorLibrary.Temperature import TemperatureSensor

tempSensor = TemperatureSensor()

## creates a new Async Socket IO Server
sio = socketio.AsyncServer(cors_allowed_origins='http://localhost:3000')
## Creates a new Aiohttp Web Application
app = web.Application()
# Binds our Socket.IO server to our Web App
## instance
sio.attach(app)


async def index(request):
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')

@sio.event
async def connect(*args):
    print('connection established')
    await sio.emit('confirm_connection')


@sio.on(raspberryCommands.GET_TEMPERATURE)
async def getTemperature(*args):
    temperatures = tempSensor.read_temp()
    #await sio.emit(raspberryCommands.GET_TEMPERATURE, {'data': temperatures})
    return temperatures[0]


app.router.add_get('/', index)

## We kick off our server
if __name__ == '__main__':
    web.run_app(app)