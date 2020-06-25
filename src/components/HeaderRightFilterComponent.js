import React, {useState, useLayoutEffect} from 'react';
import { Badge, Container, Content, Button, Fonts, Input, Header, Footer, FooterTab, Icon } from 'native-base'
import { FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image, Platform, ScrollView, KeyboardAvoidingView, Text, View } from "react-native";
import {StackActions} from '@react-navigation/routers';
import { DrawerActions } from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';

function HeaderRightFilterComponent ({ route, navigation }) {

  _handleChooseCategory = () => {
    let body = {
      id: 10,
      name: 'Jannn',
    };
    dispatch(chooseCategoryVoucherDispatch(body))
  }

  return (
		<View style={{paddingRight: 20}}>
			<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
				<Icon name="filter-outline" type="MaterialCommunityIcons" style={{fontSize: 24, color: 'white'}}/>
			</TouchableOpacity>
		</View>
  );
}

const styles = StyleSheet.create({

})


export default connect(state => ({
}))(HeaderRightFilterComponent);
