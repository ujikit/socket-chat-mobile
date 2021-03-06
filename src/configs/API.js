import axios from 'axios/index'
import { URL_DEVELOPMENT } from './';

const fetch = async (url, options = {
  method: 'GET',
  body: {}
}) => {
  const request = {
    // development
    baseURL: URL_DEVELOPMENT,
    method: options.method,
    timeout: 500000,
    url,
    headers: options.head
  };
  if (request.method === 'POST') request.data = options.body;
  if (request.method === 'PUT') request.data = options.body;
  if (request.method === 'DELETE') request.data = options.body;
  const res = await axios(request);
  if (res.status === 200) {
    return res.data
  } else {
    throw res
  }
}

export default {
  login: (body) => {
    console.log('login_parameter: ', body);
    return fetch('/login', {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    })
  },
  set_id_socket_user: (body) => {
    console.log('login_parameter: ', body);
    return fetch('/set-id-socket-user', {
      method: 'PUT',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    })
  },
  show_user: (body) => {
    console.log('show_user_parameter: ', body);
    return fetch(`/show-user/${body.username}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },
  conversations: (body) => {
    console.log('conversations_parameter: ', body);
    return fetch(`/conversations/${body.username}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },
  conversation_messages: (body) => {
    console.log('conversation_messages_parameter: ', body);
    return fetch(`/conversation-messages/${body.username}/${body.receiver_username}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },
}
