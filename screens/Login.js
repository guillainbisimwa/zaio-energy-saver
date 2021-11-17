import AsyncStorage from '@react-native-async-storage/async-storage';
import { Block, Text, Button, Input, theme } from 'galio-framework';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fakeApi from '../api/fakeApi';

const Login = ({navigation}) => {
    const [user, setUser] = useState('johnd');
    const [pass, setPass] = useState('m38rmF$');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const state = useSelector((st)=> st);
    //console.log(state.user);

    useEffect(() => {
        getData();
    }, [])

    const storeData = async (value) => {
        try {
            
            await AsyncStorage.setItem('@token', value)
        } catch (e) {
          // saving error
          console.log('error');
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@token');
            if(value !== null) {
                // value previously stored
                ToastAndroid.show(`LOGIN TOKEN: ${value}`, ToastAndroid.LONG);
                navigation.navigate('Tab')
            }
            
            ToastAndroid.show(`LOGIN TOKEN: ${value}`, ToastAndroid.LONG);
          
        } catch(e) {
          // error reading value
          console.log('error', e);
        }
    }

    const Signin = async () => {
        if(testName(user))
        {
            setLoading(true)
            const rep = await fakeApi.post('/auth/login', {
                username: user,
                password: pass
            });
    
            console.log(rep.data);
            if(rep.data.hasOwnProperty('token')){
                ToastAndroid.show(`TOKEN: ${rep.data.token}`, ToastAndroid.LONG);
                storeData(rep.data.token);
                navigation.navigate('Tab');
            }
    
            setLoading(false)
        }else {
            ToastAndroid.show(`Name is invalid, please retry`, ToastAndroid.LONG);
        }
       
    };

    const testName = (name) => {
        return name.length > 3
    }

    return(
        <ScrollView>
            <Block center middle style={styles.container}>
                <Text size={20} color='black' bold >Sign in</Text>
                <Text style={styles.welcome} center size={15} muted >Welcome to this app from Zaio React native dev Welcome to this app from Zaio React native dev</Text>
            </Block>

            <Block row center style={styles.btn}>
                <Button onlyIcon icon="facebook-square" iconFamily="antdesign" iconSize={20} 
                color={theme.COLORS.FACEBOOK} iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>

                <Button onlyIcon icon="twitter" iconFamily="antdesign" iconSize={20} 
                color={theme.COLORS.TWITTER} iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>

                <Button onlyIcon icon="instagram" iconFamily="antdesign" iconSize={20} 
                color={theme.COLORS.DRIBBBLE} iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>    

            </Block>
            <Text center muted>or be classical</Text>
            <Block style={styles.inputContainer} center>
                <Input rounded 
                    placeholder="Name"
                    value={user}
                    onChangeText={(value)=> setUser(value)}
                    //style={{ borderColor: 'red'}}
                />

                <Input
                    placeholder="Input with Icon on right"
                    right
                    rounded
                    icon="heart"
                    family="antdesign"
                    iconSize={14}
                    iconColor="grey"
                    password={true}
                    help="Your password"
                    bottomHelp
                    value={pass}
                    onChangeText={(text)=>setPass(text)}
                />

            </Block>
            <Block center>
                <Button round loading={loading}
                    onPress={()=> Signin()}
                >Sign In</Button>
            </Block>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    welcome :{
        marginTop: 40,
        marginHorizontal: 40
    },
    btn: {
        marginVertical: 50
    },
    inputContainer: {
        width: '80%',
        marginTop: 80
    }
});
export default Login;
