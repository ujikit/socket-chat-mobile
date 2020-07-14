import React, {useState, useCallback, useEffect} from 'react';
import {
  AsyncStorage,
  StyleSheet,
} from 'react-native';
import {
  Body,
  Button,
  Container,
  Form,
  Icon,
  Input,
  Item,
  Text,
  View,
  Header,
  Content,
  Tab,
  Tabs,
  Grid,
  Col,
  Left,
  List,
  ListItem,
  Right,
  Thumbnail,
} from 'native-base';
import {StackActions} from '@react-navigation/routers';
import {NavigationActions} from '@react-navigation/compat';
import {connect, useDispatch} from 'react-redux';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

// components
import NoData from '../components/NoData';
// configs
import API from '../configs/API';
// services
import {socket} from '../services/SocketIO';

function ConversationScreen ({route, navigation, me_reducer}) {
  const dispatch = useDispatch()
  let { receiver_username } = route.params;

  let [is_refresh_data, setIsRefreshData] = useState(false);
  let [messages, setMessages] = useState([
    // {
    //   _id: 1,
    //   text: 'Hello developer',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //     avatar: 'https://placeimg.com/140/140/any',
    //   },
    // },
  ]);

  useEffect(() => {
    navigation.setOptions({ receiver_username })
    _handleFetchConversation();
  }, [])

  // handle socket event
  useEffect(() => {
    socket.on('private message', data => {

      let {
        id,
        id_socket_target,
        id_socket_sender,
        username_sender,
        message
      } = data;

      setMessages(oldArray => {
        let data = [
          {
            _id: id,
            text: message[0].text,
            createdAt: message[0].createdAt,
            user: {
              _id: username_sender,
              name: username_sender
            }
          },
          ...oldArray
        ]

        return [...data]
      })
    })
  }, [])

  _handleRefreshData = () => {

  }

  _handleFetchConversation = async () => {

    let body = {
      username: me_reducer.username,
      receiver_username
    }

    API.conversation_messages(body)
      .then(response => {
        console.log('get_conversation_messages_success', response);

        setMessages(() => {

          let filteredArr2 = response.filter((v,i,a) => (v.receiver_username === receiver_username && v.sender_username === me_reducer.username) || (v.sender_username === receiver_username && v.receiver_username === me_reducer.username));

          let chat = filteredArr2.sort(function (a, b) {
            return a.time_message - b.time_message;
          }).reverse();

          let new_data = [];
          for (var i = 0; i < chat.length; i++) {
            new_data.push({
              _id: chat[i].id,
              text: chat[i].message,
              createdAt: chat[i].time_message,
              user: {
                _id: chat[i].sender_username,
                name: chat[i].sender_username
              },
            })
          }

          return [...new_data];
        });
      })
      .catch(async error => {
        console.log('get_conversation_messages_error', error);
        console.log('get_conversation_messages_error', error.response);
      });
  }

  const onSend = useCallback((message = []) => {
    let body = {
      username: receiver_username
    }

    API.show_user(body)
    .then(async response => {
      console.log('get_show_user_success', response);

      let data = {
        id_socket_target: response[0].id_socket,
        id_socket_sender: me_reducer.id_socket,
        username_sender: me_reducer.username,
        message,
      }

      socket.emit('send message', data);

      setMessages(previousMessages => GiftedChat.append(previousMessages, message))
    })
    .catch(async error => {
      console.log('get_show_user_error', error);
      console.log('get_show_user_error', error.response);
    });
  }, [])

  return (
    <GiftedChat
      placeholder="Ketik pesan.."
      messages={messages}
      onSend={messages => onSend(messages)}
      renderAvatar={null}
      user={{
        _id: me_reducer.username,
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            textStyle={{
              left: {
                color: 'black'
              },
              right: {
                color: 'white'
              }
            }}
            wrapperStyle={{
              left: {
                backgroundColor: 'white',
              },
              right: {
                backgroundColor: '#03a4da',
              },
            }}
          />
        );
      }}
      renderChatEmpty={() => (
        !messages.length ?
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{ scaleY: -1 }]}}>
            <NoData
              image={require('../../assets/images/illustration/no_chat.png')}
              size_image_width={220}
              size_image_height={200}
              line1={'Belum ada chat.'}
              is_refresh_data={is_refresh_data}
              _handleRefreshData={_handleRefreshData}
              />
          </View>
        :
          null
      )}
    />
  )
}

const styles = StyleSheet.create({});

export default connect(state => ({
  me_reducer: state.global_all.me_reducer,
}))(ConversationScreen);
