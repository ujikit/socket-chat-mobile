import io from "socket.io-client";

// configs
import {URL_DEVELOPMENT} from '../configs';

const socket = io(URL_DEVELOPMENT);

module.exports = {
  socket
}
