import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AddDevice, EmptyScreen, Login } from '../screens';
import Tabs from './Tab';

const MyStack = createNativeStackNavigator();

const Auth = () => {
  return(
    <MyStack.Navigator
        initialRouteName="Login"
        screenOptions = {{ headerShown: false }}
    >
        <MyStack.Screen name="Login" component={Login} />
    </MyStack.Navigator>
  )
};

export default Auth;
