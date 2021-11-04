import AsyncStorage from '@react-native-async-storage/async-storage';
import { Block, Text, Button, Toast, theme } from 'galio-framework';
import React, { useState } from 'react';

const Notifications = () => {
    const [isShow, setShow] = useState(false);
    const [val, setVal] = useState("empty");


    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('@test')
        if(value !== null) {
            // value previously stored
            setShow(!isShow)
            setVal(value)
        }
        console.log('val', value);
        } catch(e) {
        // error reading value
        console.log('error', e);
        }
    }

    return(
        <Block flex={1} center middle>
            <Text h1 >Notifications</Text>
            <Button round loading={false} 
                onPress={() => getData()}>Read from Storage</Button>
            <Toast isShow={isShow} color={theme.COLORS.TWITTER} positionIndicator="top">{val}</Toast>

        </Block>
    )
};

export default Notifications;
