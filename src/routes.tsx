import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Login } from './screens/Login';


export function Routes() {

  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          navigationBarHidden: true
        }}
        initialRouteName="Login"
      >
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  )
}