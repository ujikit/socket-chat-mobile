import React, {useState, useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  Alert,
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
import Ripple from 'react-native-material-ripple';
import {connect, useDispatch} from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'

function ConversationScreen ({route, navigation}) {
  const dispatch = useDispatch()

  let [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }
  ]);

  useEffect(() => {
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({});

export default connect(state => ({
  choose_merchant_category_reducer: state.merchant_category.choose_merchant_category_reducer,
}))(ConversationScreen);
