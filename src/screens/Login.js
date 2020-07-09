import React, {useState, useEffect} from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container } from 'native-base';
import {StackActions} from '@react-navigation/routers';
import AsyncStorage from '@react-native-community/async-storage'
import {connect, useDispatch} from 'react-redux';

// configs
import API from '../configs/API'
// states
import {meDispatch} from '../states/actions/General/global_all_action'

function LoginScreen ({route, navigation}) {
  const dispatch = useDispatch()

  let [username, setUsername] = useState('ujikit');

  _handleLogin = () => {
    if (!username) { alert('Ini username terlebih dahulu') }
    let data = {
      username
    }
    API.login(data)
      .then(async response_login => {
        console.log('login_success', response_login);

        if (response_login.code !== 200) return
        await AsyncStorage.setItem('user_data', await JSON.stringify(response_login.data[0]))
        dispatch(await meDispatch(response_login.data[0]));
        return navigation.dispatch(StackActions.replace('ListChat'));
      })
      .catch(error => {
        console.log('login_error', error);
        console.log('login_error', error.response);
      })
  }

  return (
    <Container>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text style={{textAlign: 'center'}}>Username</Text>
          <TextInput onChangeText={text => setUsername(text)} value={username} placeholder="Masukan username.." style={{borderBottomWidth: 1}}/>
        </View>
        <View style={{paddingTop: 30}}>
          <TouchableOpacity onPress={() => _handleLogin()} style={{backgroundColor: 'rgb(65, 200, 156)', borderRadius: 5}}>
            <Text style={{paddingHorizontal: 20, paddingVertical: 10, color: 'white', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

export default connect(state => ({}))(LoginScreen);
