import * as React from 'react';
import { View, StatusBar, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Root, Container, Content} from 'native-base';

// config
import {store, persistor} from './src/states/store/store';
// screens
import ListChat from './src/screens/ListChat';
import Conversation from './src/screens/Conversation';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <SafeAreaProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="ListChat">
                  <Stack.Screen
                    name="ListChat"
                    component={ListChat}
                    options={{
                      title: 'List Chat'
                    }}
                  />
                  <Stack.Screen
                    name="Conversation"
                    component={Conversation}
                    options={{
                      title: 'Conversation'
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

export default App;
