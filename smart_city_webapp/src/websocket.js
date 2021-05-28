const io = require('socket.io-client');

const ENDPOINT = 'http://localhost:4000';

const connectionOptions = {
  'force new connection': true,
  reconnectionAttempts: 'infinity',
  timeout: 10000,
  transports: ['websocket'],
};

export const socket = io(ENDPOINT, connectionOptions);

socket.on('confirm_connection', () => {
  console.log('connection with server confirmed');
});
