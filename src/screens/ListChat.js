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
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {StackActions} from '@react-navigation/routers';
import {NavigationActions} from '@react-navigation/compat';
import {connect, useDispatch} from 'react-redux';

// configs
import API from '../configs/API'

function ListChatScreen ({route, navigation}) {
  const dispatch = useDispatch()

  let [user_data, setUserData] = useState([]);

  useEffect(() => {
    _handleFetchUsersData();
  }, [])

  _handleFetchUsersData = () => {
    API.users()
      .then(async response => {
        console.log('get_users_success', response);
        setUserData(response);
      })
      .catch(async error => {
        console.log('get_users_error', error);
        console.log('get_users_error', error.response);
      });
  }

  return (
    <Container>
      <Content>
        <List>
          <FlatList
            data={user_data}
            keyExtractor = { (item, index) => index.toString() }
            renderItem={({ item }) => (
              <ListItem avatar onPress={() => navigation.navigate('Conversation')}>
                <Left>
                  <Thumbnail source={require('../../assets/images/user.png')} />
                </Left>
                <Body>
                  <Text>{item.username}</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            )}
          />
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});

export default connect(state => ({
  is_authenticated: state.global_all.is_authenticated,
}))(ListChatScreen);
