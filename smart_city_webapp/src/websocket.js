const io = require('socket.io-client');

export const RES_TEMPERATUE = 'raspberry:res:readTemp';
export const RES_SOIL_MOISTURE = 'raspberry:res:readSoilMoisture';

const ENDPOINT = '192.168.1.92:8080';
// 192.168.43.178
// const connectionOptions = {
//   'force new connection': true,
//   reconnectionAttempts: 'infinity',
//   timeout: 10000,
//   transports: ['websocket'],
// };

export const socket = io(ENDPOINT);

socket.on('confirm_connection', () => {
  console.log('connection with server confirmed');
});

socket.on(RES_TEMPERATUE, (res) => {
  console.log(res);
});
