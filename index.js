const io = require('socket.io-client');

const SOCKET_URL = "http://115.71.233.53:56000";
const socket = io(SOCKET_URL);