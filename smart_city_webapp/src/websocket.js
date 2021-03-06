import * as socketIO from 'socket.io-client';

export const RES_TEMPERATURE = 'raspberry:res:readTemp';
export const RES_SOIL_MOISTURE = 'raspberry:res:readSoilMoisture';

const ENDPOINT = 'http://192.168.1.92:9025';

export const socket = socketIO(ENDPOINT, { transports: ['websocket'], reconnection: true, rejectUnauthorized: null });

console.log('requesting data...');
socket.emit('requestData', null);

socket.on('confirm_connection', (data) => {
  console.log('connection with server confirmed');
});

socket.on('connect_error', (err) => {
  console.log(err.message);
});
