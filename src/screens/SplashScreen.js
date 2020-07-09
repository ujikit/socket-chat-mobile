import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/routers';
import {Button, Container, Content, Form, Header, Input} from 'native-base';
import {connect} from 'react-redux';

// states
import { meDispatch } from "../states/actions/General/global_all_action";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  meDispatch: (data) => {
    dispatch(meDispatch(data));
  }
});

type Props = {};
class SplashScreen extends Component<Props> {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    await this.checkAuth();
  }

  checkAuth = async () => {
    setTimeout(async () => {
      let user_data = JSON.parse(await AsyncStorage.getItem('user_data'));
      if (user_data === null) {
        return this.props.navigation.dispatch(StackActions.replace('Login'));
      }
      this.props.meDispatch(user_data);
      this.props.navigation.dispatch(StackActions.replace('ListChat'));
    }, 2500);
  }

  render() {
    return (
      <View style={styles.frame_main_logo}>
        <View style={styles.main_logo}>
          <Image
            resizeMode="contain"
            style={{width: 120}}
            source={require('../../assets/images/user.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  frame_main_logo: {
    height: Dimensions.get('window').height,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  main_logo: {alignSelf: 'center'},
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
