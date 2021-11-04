import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import Tabs from './navigation/Tab';
import {AddDevice, EmptyScreen} from './screens';
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
          <Stack.Screen name="AddDevice" component={AddDevice} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default App;
