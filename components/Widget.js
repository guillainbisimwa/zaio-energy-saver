import { Block, Text, theme, Switch } from "galio-framework";
import React, { useState } from "react";
import { Image, TouchableOpacity, View, Alert } from "react-native";
import PropTypes from 'prop-types';
import Size from "../constants/Size";
import { useDispatch } from "react-redux";
import { deleteWidget } from "../redux/WidgetReducer";

const Widget = (props) => {
  const dispatch = useDispatch();
  const [sActive, setSActive] = useState(props.widget.active);

  const updateSActive = (sState) => {
    setSActive(!sState)
  };

    const progress = () => {
      return (
        <View style={{marginTop:15, width: '100%', justifyContent:'center', borderRadius: 10, 
        backgroundColor: sActive? '#64d1da': '#ddd', height:28}}> 
          <View style={{ width: props.widget.state+'%', height: 28, 
          backgroundColor: props.widget.state < 20 ?
          theme.COLORS.DRIBBBLE : props.widget.state < 50 ? theme.COLORS.WARNING: 
          props.widget.state < 90? 
          sActive? theme.COLORS.WHITE: theme.COLORS.TWITTER : theme.COLORS.SUCCESS,  borderRadius: 10,  }}>
          
          </View>
          <View style={{position:'absolute', width:'100%',alignItems:'flex-end', paddingRight: 15}}>
            <Text color={sActive? 'white': '#000'} >{props.widget.state}%</Text>
          </View>
        </View>
      )
    };

    const remove = (name) => (
      Alert.alert(
        "Remove a device",
        `Do you want to remove ${name} in your devices list?`,
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Remove",
            onPress: () =>{
                dispatch(
                deleteWidget(props.id)
              )
            }
          }
        ]
      )
    );

    return (
        <Block style={{ width: Size.width / 2.11, padding: Size.p}}>

        <Block>
          <TouchableOpacity style={{ height: 160, 
          backgroundColor: sActive? theme.COLORS.TWITTER: theme.COLORS.WHITE, 
          borderRadius: 10, padding: Size.p, elevation:2}}
          onPress={()=> (
            remove(props.widget.name)
          ) }
          >
            <Block row space="between" style={{ alignItems:'center'}}>
              <Block middle shadow style={{ backgroundColor: sActive? theme.COLORS.WHITE: theme.COLORS.GREY, borderRadius: 35, width: 35, height: 35, alignItems:'center'}}>
                <Image source={require('../assets/favicon.png')} style={{width: 20, height: 20}} />
              </Block>
              <Switch value={sActive} trackColor={{
                false: theme.COLORS.GREY,
                true: theme.COLORS.WHITE
                }} 
                onChange={() => updateSActive(sActive) }
                />
            </Block>
            <Text bold color={sActive? 'white': 'black'} style={{marginTop: Size.m_5*2.9}}>{props.widget.name}</Text>
            <Text color={sActive? 'white': 'gray'} small>{props.widget.location}</Text>
            { progress()}
          </TouchableOpacity>
        </Block>
      </Block>
    )
};

Widget.propTypes = {
    widget: PropTypes.object,
  }

export default Widget;
