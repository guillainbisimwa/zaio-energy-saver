import { Block, Text, theme } from "galio-framework";
import React from "react";
import { Image, Switch, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import Size from "../constants/Size";
import { useDispatch } from "react-redux";
import { deleteWidget } from "../redux/WidgetReducer";

const Widget = (props) => {
  const dispatch = useDispatch();

    const progress = () => {
        return (
          <View style={{marginTop:15, width: '100%', justifyContent:'center', borderRadius: 10, 
          backgroundColor: props.widget.active? '#64d1da': '#ddd', height:28}}> 
            <View style={{ width: props.widget.state+'%', height: 28, 
            backgroundColor: props.widget.state < 20 ?
            theme.COLORS.DRIBBBLE : props.widget.state < 50 ? theme.COLORS.WARNING: 
            props.widget.state < 90? 
            props.widget.active? theme.COLORS.WHITE: theme.COLORS.TWITTER : theme.COLORS.SUCCESS,  borderRadius: 10,  }}>
            
            </View>
            <View style={{position:'absolute', width:'100%',alignItems:'flex-end', paddingRight: 15}}>
              <Text color={props.widget.active? 'white': '#000'} >{props.widget.state}%</Text>
            </View>
          </View>
        )
      }

    return (
        <Block style={{ width: Size.width / 2.11, padding: Size.p}}>

        <Block>
          <TouchableOpacity style={{ height: 160, 
          backgroundColor: props.widget.active? theme.COLORS.TWITTER: theme.COLORS.WHITE, 
          borderRadius: 10, padding: Size.p, elevation:2}}
          onPress={()=> (
            dispatch(
              deleteWidget(props.id)
            )
          ) }
          >
            <Block row space="between" style={{ alignItems:'center'}}>
              <Block middle shadow style={{ backgroundColor: props.widget.active? theme.COLORS.WHITE: theme.COLORS.GREY, borderRadius: 35, width: 35, height: 35, alignItems:'center'}}>
                <Image source={require('../assets/favicon.png')} style={{width: 20, height: 20}} />
              </Block>
              <Switch value={props.widget.active} trackColor={{
                false: theme.COLORS.GREY,
                true: theme.COLORS.WHITE
              }} />
            </Block>
            <Text bold color={props.widget.active? 'white': 'black'} style={{marginTop: Size.m_5*2.9}}>{props.widget.name}</Text>
            <Text color={props.widget.active? 'white': 'gray'} small>{props.widget.location}</Text>
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
