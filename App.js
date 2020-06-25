// In App.js in a new project

import * as React from 'react';
import { View, StatusBar, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Root, Container, Content} from 'native-base';
import codePush from 'react-native-code-push';

// config
import {store, persistor} from './src/states/store/store';
// screens
import SplashScreen from './src/screens/SplashScreen';

// configs
import { MAIN_COLOR, MAIN_COLOR_SECOND } from './src/configs/Color'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={MAIN_COLOR_SECOND}
        />
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <SafeAreaProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="SplashScreen">
                  <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                      title: 'Splash Screen',
                      headerShown: false
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </SafeAreaProvider>
          </Root>
        </PersistGate>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// development
console.disableYellowBox = true;

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME // ON_APP_START, ON_APP_RESUME, ON_APP_MANUAL
}

export default codePush(codePushOptions)(App);
