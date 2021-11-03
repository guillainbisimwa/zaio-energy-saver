import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Tabs from './navigation/Tab';
import {EmptyScreen} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions = {{ headerShown: false }}
      >
        <Stack.Screen name="Tab" component={Tabs} />
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
};

export default App;
