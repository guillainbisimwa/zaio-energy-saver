import { Block, Text, Button, theme, Card, Icon } from "galio-framework";
import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Size from "../constants/Size";
import { addWidget } from "../redux/WidgetReducer";

const AddDevice = ({ navigation }) => {


    const dispatch = useDispatch();

    const addList = () => {
        dispatch(
            addWidget(
                {
                    id: 2,
                    name : 'CCTV',
                    location: 'Bed Room',
                    active: false,
                    state : 50,
                    icon : 'light'
                }
            )
        )
        navigation.navigate("Home")
    };

    return(
        
        <Block style={styles.container} flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Block space="between" row middle>
                
                <Button 
                    onlyIcon 
                    icon="tags" 
                    iconFamily="antdesign" 
                    iconSize={30} 
                    color="white" 
                    iconColor="grey" 
                    style={{ width: 40, height: 40, elevation: 5 }}>
                </Button>
                <Block center >
                    <Text bold >Add device</Text>
                   
                </Block>

            </Block>
            <Text center muted size={18}>Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsums</Text>

                        <Block style={styles.addWidget}>
                    <TouchableOpacity style={styles.add}
                        onPress={()=> addList()}
                    >
                        <Button 
                            onlyIcon 
                            icon="tags" 
                            iconFamily="antdesign" 
                            iconSize={80} 
                            color="transparent" 
                            iconColor={theme.COLORS.TWITTER} 
                            style={{ width: 85, height: 85,  }}>
                        </Button>
                    </TouchableOpacity>
                </Block>

        </ScrollView>
        </Block>

    )
};

const styles = StyleSheet.create({
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    container:{
        backgroundColor: theme.COLORS.GREY,
        padding:12
    },
    m: {
        margin: Size.m_5
    },
    energy: {
        margin: Size.m_5,
        padding: 15,
        borderBottomColor: theme.COLORS.MUTED,
        borderBottomWidth:1,
    },
    energyState: {
        margin: Size.m_5,
        paddingHorizontal: 15
    },
    card: {
        marginVertical:20,
        backgroundColor: theme.COLORS.TWITTER,
        borderRadius: 10,
        elevation: 0.2
    },
    wrap :{
        flexWrap: "wrap"
    },
    addWidget: {
        width: Size.width/2.15,
        padding: Size.p
    },
    add: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        backgroundColor: theme.COLORS.WHITE,
        borderRadius: 10
    }
});

export default AddDevice;
