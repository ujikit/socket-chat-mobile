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
import {connect, useDispatch} from 'react-redux';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

// components
import NoData from '../components/NoData'

function ConversationScreen ({route, navigation, me_reducer}) {
  const dispatch = useDispatch()

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
  }, [])

  _handleRefreshData = () => {

  }

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      placeholder="Ketik pesan.."
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: me_reducer.id,
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            textStyle={{}}
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
      )}
    />
  )
}

const styles = StyleSheet.create({});

export default connect(state => ({
  me_reducer: state.global_all.me_reducer,
}))(ConversationScreen);
