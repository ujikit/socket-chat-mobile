import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// components
import CustomSidebar from '../components/CustomSidebar';
// screens
import RootNavigator from '../screens/RootNavigator'
import Home from '../screens/RootNavigator/Home'
import Profile from '../screens/RootNavigator/Profile'

const Drawer = createDrawerNavigator();

function RootNavigator2 ({navigation}) {
  return(
    <RootNavigator navigation={navigation}/>
  )
}

export default function App() {
  return (
    <Drawer.Navigator drawerContent={
        props => <CustomSidebar {...props}/>
    }>
      <Drawer.Screen name="RootNavigator" component={RootNavigator2}/>
    </Drawer.Navigator>
  );
}
