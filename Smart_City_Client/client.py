import socketio

sio = socketio.Client()

@sio.on('my message')
def on_message(data):
    print('I received a message!')

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

sio.connect('http://localhost:3000')
sio.wait()