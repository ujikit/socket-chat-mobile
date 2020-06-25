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
import AsyncStorage from '@react-native-community/async-storage'
import {connect, useDispatch} from 'react-redux';

function ConversationScreen ({route, navigation}) {
  const dispatch = useDispatch()

  let [password_visible, setPasswordVisible] = useState(false);
  let [is_loading_register, setIsLoadingRegister] = useState(false);
  let [is_error_password_confirmation, setIsErrorPasswordConfirmation] = useState('');
  let [is_error_message_password_confirmation, setIsErrorMessagePasswordConfirmation] = useState('');

  let [new_name, setNewName] = useState('');
  let [new_phone_number, setNewPhoneNumber] = useState('');
  let [new_address, setNewAddress] = useState('');
  let [new_email, setNewEmail] = useState('');
  let [new_password, setNewPassword] = useState('');
  let [new_password_confirmation, setNewPasswordConfirmation] = useState('');

  useEffect(() => {
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: MAIN_COLOR}}>

    </ScrollView>
  )
}

const styles = StyleSheet.create({});

export default connect(state => ({
  choose_merchant_category_reducer: state.merchant_category.choose_merchant_category_reducer,
}))(ConversationScreen);
