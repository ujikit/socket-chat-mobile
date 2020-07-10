import React, {useState, useEffect} from 'react';
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
import { Container, Fab, Header, Icon, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {StackActions} from '@react-navigation/routers';
import AsyncStorage from '@react-native-community/async-storage'
import {connect, useDispatch} from 'react-redux';

// configs
import API from '../configs/API'

function ListChatScreen ({route, navigation}) {
  const dispatch = useDispatch()

  let [list_chat_data, setListChatData] = useState([]);

  useEffect(() => {
    _handleFetchUsersData();
  }, [])

  _handleFetchUsersData = async () => {
    let user_data = JSON.parse(await AsyncStorage.getItem('user_data'));

    let body = {
      username: user_data.username
    }

    API.conversations(body)
      .then(async response => {
        console.log('get_conversations_success', response);

        setListChatData(() => {
          let filteredArr1 = response.filter(item => {
            return item.receiver_username !== user_data.username
          });

          let filteredArr2 = filteredArr1.filter((v,i,a) => a.findIndex(t => (t.receiver_username === v.receiver_username)) === i)

          let chat = filteredArr2.sort(function (a, b) {
            return a.time_message - b.time_message;
          }).reverse()

          return [...chat]
        });
      })
      .catch(async error => {
        console.log('get_conversations_error', error);
        console.log('get_conversations_error', error.response);
      });
  }

  _handleLogout = async () => {
    await AsyncStorage.removeItem('user_data');
    navigation.dispatch(StackActions.replace('Login'));
  }

  return (
    <Container>
      <List>
        <FlatList
          data={list_chat_data}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({ item, index }) => (
            <ListItem key={index} avatar onPress={() => navigation.navigate('Conversation')}>
              <Left>
                <Thumbnail source={require('../../assets/images/user.png')} />
              </Left>
              <Body>
                <Text>{item.receiver_username}</Text>
                <Text note>{item.message}</Text>
              </Body>
            </ListItem>
          )}
          />
      </List>
      <Fab
        style={{ backgroundColor: 'rgb(111, 176, 77)' }}
        position="bottomRight"
        onPress={() => _handleLogout()}>
        <Icon name="exit-run" type="MaterialCommunityIcons" style={{ fontSize: 30, color: 'white' }} />
      </Fab>
    </Container>
  );
}

const styles = StyleSheet.create({});

export default connect(state => ({
  is_authenticated: state.global_all.is_authenticated,
}))(ListChatScreen);
