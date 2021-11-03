import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import Tabs from './navigation/Tab';
import {EmptyScreen} from './screens';
import Store from './redux/Store';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tab"
          screenOptions = {{ headerShown: false }}
        >
          <Stack.Screen name="Tab" component={Tabs} />
          <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default App;
