import AsyncStorage from "@react-native-async-storage/async-storage";
import { Block, Text, Button, theme, Card, Icon } from "galio-framework";
import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { useSelector } from "react-redux";
import Widget from "../components/Widget";
import Size from "../constants/Size";

const Home = ({ navigation }) => {

    const widget = useSelector((state)=> state.widget.widgets);
    const [refresh, setRefresh] = useState(false);

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@test', value)
        } catch (e) {
          // saving error
          console.log('error ', e);
        }
    }

    const onRefresh = () => {
        setRefresh(false);
        storeData('Hello Word!');
    };
    
    return(
        
        <Block style={styles.container} flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl 
                    refreshing={refresh}
                    onRefresh={onRefresh}
                />
            }
        >
            <Block space="between" row middle>
                <Block row >
                    <Block style={styles.m}>
                        <Image source={require("../assets/profile.jpg")} style={styles.profile} />
                    </Block>
                    <Block>
                        <Text muted>Welcome home</Text>
                        <Text bold h5>SHoo Smith</Text>
                    </Block>
                </Block>
                <Button 
                    onlyIcon 
                    icon="tags" 
                    iconFamily="antdesign" 
                    iconSize={30} 
                    color="white" 
                    iconColor="grey" 
                    style={{ width: 40, height: 40, elevation: 5 }}>
                </Button>

            </Block>

            <Block style={styles.card} >
                <Block style={styles.energy} row space="between">
                    <Text bold size={15}>Energy consuming</Text>
                    <Block row middle>
                        <Text>24 sep 2021</Text>
                        <Icon name="tags" family="antdesign" color={theme.COLORS.BLACK} size={10} />
                    </Block>
                </Block>
                <Block style={styles.energyState} row space="between">
                    <Block row>
                        <Icon name="tags" family="antdesign" color={theme.COLORS.TWITTER} size={50} />
                        <Block>
                            <Text muted>Today</Text>
                            <Text bold>24 kwH</Text>
                        </Block>
                    </Block>
                    <Block row>
                        <Icon name="tags" family="antdesign" color={theme.COLORS.TWITTER} size={50} />
                        <Block>
                            <Text muted>This Month</Text>
                            <Text bold>424 kwH</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
            <Text bold size={20}>Connected devices</Text>
            <Block style={styles.wrap} row>
                {
                    widget.map((obj, index)=> 
                        <Widget widget={obj} key={index} id={index} />
                    )
                }
                <Block style={styles.addWidget}>
                    <TouchableOpacity style={styles.add}
                        onPress={()=> navigation.navigate("AddDevice")}
                    >
                        <Button 
                            onlyIcon 
                            icon="tags" 
                            iconFamily="antdesign" 
                            iconSize={30} 
                            color="white" 
                            iconColor="grey" 
                            style={{ width: 55, height: 55, elevation: 5 }}>
                        </Button>
                        <Text bold>Add device</Text>
                    </TouchableOpacity>
                </Block>
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
        backgroundColor: theme.COLORS.WHITE,
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
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 10
    }
});

export default Home;
