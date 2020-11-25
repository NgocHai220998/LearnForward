import AppConfig from './config';

let envConfig = AppConfig.prod;

if (process.env.NODE_ENV === 'development') {
  envConfig = AppConfig.dev;
}

const config = envConfig;

const API = {
  EXAMPLE: `${config.BACKEND_ADDRESS}/example`,
};

const SOCKET_EVENT = {
  socket: 'socket',
  urlSocket: config.SOCKET_SERVER,
};

export {
  API,
  SOCKET_EVENT,
};
