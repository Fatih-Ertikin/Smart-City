const io = require('socket.io-client');

export const RES_TEMPERATURE = 'raspberry:res:readTemp';
export const RES_SOIL_MOISTURE = 'raspberry:res:readSoilMoisture';

const ENDPOINT = '192.168.1.92:8080';

export const socket = io(ENDPOINT);

socket.on('confirm_connection', () => {
  console.log('connection with server confirmed');
});
