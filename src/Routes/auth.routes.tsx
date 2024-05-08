import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '@screens/Home';

const {Screen, Navigator} = createNativeStackNavigator();

export const AuthenticationRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="First" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};
