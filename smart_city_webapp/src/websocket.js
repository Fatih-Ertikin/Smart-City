const io = require('socket.io-client');

const ENDPOINT = '192.168.43.178:8080';
// 192.168.43.178
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
