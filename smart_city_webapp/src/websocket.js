const io = require('socket.io-client');

export const RES_TEMPERATURE = 'raspberry:res:readTemp';
export const RES_SOIL_MOISTURE = 'raspberry:res:readSoilMoisture';

const ENDPOINT = 'http://192.168.1.92:8080';

export const socket = io(ENDPOINT, { transports: ['websocket'] });

socket.on('confirm_connection', (data) => {
  console.log('connection with server confirmed');
  console.log(data);
});
