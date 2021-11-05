import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Tabs from './navigation/Tab';
import Store from './redux/Store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Auth from './navigation/Auth';
import { AddDevice, EmptyScreen } from './screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackMain = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if(value !== null) {
        setLoggedIn(true)
      }
      
    } catch(e) {
      // error reading value
      console.log('error', e);
    }
  };

  useEffect(()=> {
    getData();
  }, [])

  return(
    <Provider store={Store}>
      <NavigationContainer>
      {
        !loggedIn? 
          <Auth /> :
          <DrawerStack.Navigator initialRouteName="Tab"
            screenOptions = {{ headerShown: false }}>
            <DrawerStack.Screen name="Tab" component={Tabs} />
            <DrawerStack.Screen name="EmptyScreen" component={EmptyScreen} />
            <DrawerStack.Screen name="AddDevice" component={AddDevice} />
          </DrawerStack.Navigator>
      }
        
      </NavigationContainer>
    </Provider>
  )
};

export default App;
