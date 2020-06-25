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
import Ripple from 'react-native-material-ripple';
import {connect, useDispatch} from 'react-redux';

function ListChatScreen ({route, navigation}) {
  const dispatch = useDispatch()

  useEffect(() => {

  }, [])

  return (
    <Container>
      <Content>
        <List>
          <ListItem avatar onPress={() => navigation.navigate('Conversation')}>
            <Left>
              <Thumbnail source={require('../../assets/images/user.png')} />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});

export default connect(state => ({
  choose_merchant_category_reducer: state.merchant_category.choose_merchant_category_reducer,
}))(ListChatScreen);
