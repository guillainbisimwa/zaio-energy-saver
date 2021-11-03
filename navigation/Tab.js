import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Block, Text, theme } from 'galio-framework';
import { Icon } from 'galio-framework';
import Ionicons from 'react-native-vector-icons/Ionicons'

import React from 'react';
import { Home, Notifications, Settings } from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route })=>({
                headerShown: false,
                tabBarIcon: ({focused, color, size})=>{
                    let iconName;
                    if(route.name == 'Home'){
                        iconName = focused ? "ios-home" : "ios-home"
                    }
                    if(route.name == 'Notifications'){
                        iconName="notifications"
                    }
                    if(route.name == 'Settings'){
                        iconName="cog"
                    }
                    return <Ionicons name={iconName} color={color} size={size} />
                },
                tabBarInactiveTintColor:theme.COLORS.WHITE,
                tabBarActiveTintColor: theme.COLORS.TWITTER,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: theme.COLORS.BLACK,
                    marginBottom: 15,
                    height: 80,
                    width: '95%',
                    alignSelf: 'center',
                    borderRadius: 40

                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
};

export default Tabs;
