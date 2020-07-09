import AsyncStorage from '@react-native-community/async-storage';

// configs
import API from '../configs/API'
// services
import {socket} from './SocketIO';

 const UpdateIdSocketUserDB = async () => {
   let user_data = JSON.parse(await AsyncStorage.getItem('user_data'));
   let { id, username, id_socket } = user_data;

   let data = {
     username,
     id_socket: socket.id
   }

   API.set_id_socket_user(data)
     .then(async response_login => {
       console.log('set_id_socket_user_success', response_login);
     })
     .catch(error => {
       console.log('set_id_socket_user_error', error);
       console.log('set_id_socket_user_error', error.response);
     })
 }

export {
	UpdateIdSocketUserDB
}
