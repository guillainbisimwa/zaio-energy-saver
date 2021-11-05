import AsyncStorage from '@react-native-async-storage/async-storage';
import { Block, Button, Text } from 'galio-framework';
import React from 'react';

const Settings = ({navigation}) => {
    const clearAll = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
      }
    return(
        <Block flex={1} center middle>
            <Text h1 >Settings</Text>
            <Button round color="danger" loading={false} 
                onPress={() => clearAll()}>Erase Storage</Button>
        </Block>
    )
};

export default Settings;
