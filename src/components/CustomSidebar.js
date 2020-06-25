import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, View, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import {StackActions} from '@react-navigation/routers';

// Redux
import { connect, useDispatch } from 'react-redux'
// Components
import { ToastComponent } from '../components/Toast'
// Configs
import VersionNumber from 'react-native-version-number';
import API from '../configs/API';
import { MAIN_COLOR, BLACK_FONT } from '../configs/Color'
// States
import { setIsAuthenticatedDispatch } from "../states/actions/General/global_all";

function CustomSidebarScreen ({route, navigation, is_authenticated, me_reducer}) {
  const dispatch = useDispatch();

  let {
    id,
    image_url,
    name,
    email,
    branch,
  } = me_reducer;

  let [id_user] = useState(id);
  let [image_user, setImageUser] = useState('');
  let [name_user, setNameUser] = useState('');
  let [email_user, setEmailUser] = useState('');

  useEffect(() => {
    setImageUser(image_url);
    setNameUser(name);
    setEmailUser(email);
  }, [name, image_url])

  _handleOpenVoucherScreen = () => {
    navigation.closeDrawer()
    return navigation.navigate('MineVoucher')
  }

  _handleOpenMerchantScreen = () => {
    navigation.closeDrawer()
    return navigation.navigate('Merchant')
  }

  _handleOpenTransferVoucherScreen = () => {
    navigation.closeDrawer()
    return navigation.navigate('CreateTransferVoucher')
  }

  _handleLogoutGotoAuth = async () => {
    try {
      dispatch(setIsAuthenticatedDispatch(false));
      await AsyncStorage.removeItem('user_token')
      await AsyncStorage.removeItem('user_data')
      await navigation.dispatch(
        StackActions.replace('Auth', {
          user: 'jane',
        })
      );
    } catch (e) {
      console.log(JSON.stringify(e));
    }

  };

  return (
    <Container>
      <Content>
        <ImageBackground source={require('../../assets/images/background-sidebar2.png')} style={{ justifyContent: 'center', backgroundColor: MAIN_COLOR, height: 185, padding: 22 }}>
          <Thumbnail large source={image_user !== null ? {uri: image_user} : require('../../assets/images/user.png')} />
          <View style={{marginTop:10}}>
            <Text style={{color: BLACK_FONT, fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>{name_user}</Text>
          </View>
          <View>
            <Text style={{color: BLACK_FONT, fontSize: 15, marginTop: 10 }}>{email_user}</Text>
          </View>
        </ImageBackground>
        <View style={{marginTop: 7}}>
          <TouchableHighlight underlayColor={`#f1f1f1`} onPress={() => this._handleOpenVoucherScreen()} style={{height: 60}}>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingLeft: 22}}>
              <View style={{flex:0.5}}>
                <Icon type="Ionicons" name="md-pricetags" style={{ color: BLACK_FONT, fontSize: 24 }} />
              </View>
              <View style={{flex:2.5}}>
                <Text style={{ color: BLACK_FONT, fontSize: 14, fontWeight: 'bold'}}>Voucher</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={`#f1f1f1`} onPress={() => this._handleOpenMerchantScreen()} style={{height: 60}}>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingLeft: 22}}>
              <View style={{flex:0.5}}>
                <Icon type="MaterialIcons" name="store-mall-directory" style={{ color: BLACK_FONT, fontSize: 27 }} />
              </View>
              <View style={{flex:2.5}}>
                <Text style={{ color: BLACK_FONT, fontSize: 14, fontWeight: 'bold'}}>Merchant</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={`#f1f1f1`} onPress={() => this._handleOpenTransferVoucherScreen()} style={{height: 60}}>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingLeft: 22}}>
              <View style={{flex:0.5}}>
                <Icon type="Ionicons" name="md-swap" style={{ color: BLACK_FONT, fontSize: 28 }} />
              </View>
              <View style={{flex:2.5}}>
                <Text style={{ color: BLACK_FONT, fontSize: 14, fontWeight: 'bold'}}>Transfer Voucher</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10, paddingRight: 5, paddingLeft: 5, borderBottomColor: `rgb(208, 208, 208)`, borderBottomWidth: 1 }} />
        <View>
          <TouchableHighlight underlayColor={`#f1f1f1`} onPress={() => this._handleLogoutGotoAuth()} style={{height: 60}}>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingLeft: 22}}>
              <View style={{flex:0.5}}>
                <Icon type="MaterialCommunityIcons" name="logout" style={{ color: BLACK_FONT, fontSize: 25 }} />
              </View>
              <View style={{flex:2.5}}>
                <Text style={{ color: BLACK_FONT, fontSize: 14, fontWeight: 'bold'}}>Logout</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </Content>
      <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 18 }}>
        <Text>
          Versi {VersionNumber.appVersion}
        </Text>
      </View>
    </Container>
  )
}

export default connect(state => ({
  is_authenticated: state.global_all.is_authenticated,
  me_reducer: state.profile_all.me_reducer,
}))(CustomSidebarScreen);
