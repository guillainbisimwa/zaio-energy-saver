import { Block, Text, Button, theme } from "galio-framework";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Size from "../constants/Size";


const Home = () => {
    return(
        <Block style={styles.container} flex={1}>
            <Block space="between" row middle>
                <Block row style={styles.m}>
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
        backgroundColor: theme.COLORS.GREY
    },
    m: {
        margin: Size.m_5
    }
});

export default Home;
