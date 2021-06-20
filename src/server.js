require('dotenv/config');
const server = require('./app');

server.listen(process.env.PORT|| 3333, () => console.log('Server is running'));