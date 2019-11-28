import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Fontisto';
//props: data, name, icon
export default class DropDown extends Component {
  constructor(props){
    super(props)
    this.state = {
      open:false,
      arrow:"ios-arrow-down",
    };
  }

  render() {
    let icon;
    if(this.props.type === "presets"){
      icon = <Icon1 style={styles.icon} name="keyboard-o" size={32}  color={"white"}/>
    }else if(this.props.type === "exportTo"){




    }else{
      icon = <Icon2 style={styles.icon} name="md-options" size={32}  color={"white"}/>
    }
    return(
      <View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() =>{
          this.setState({
            open: !this.state.open
          })
          if(this.state.open){
            this.setState({
              arrow:"ios-arrow-down"
            })
          }else{
            this.setState({
              arrow:"ios-arrow-up"
            })
          }
        }}
        >
        <Text style={styles.text2}>{this.props.name}</Text>
        <Icon2 name={this.state.arrow} size={25}  color={"white"}/>
      </TouchableOpacity >

      {this.props.data.map((object, index) => {
        let item = null
        let outlineVertical = styles.outlineVertical1
        let outlineHorizontal = styles.outlineHorizontal1


              if(index === this.props.data.length-1){
                  outlineVertical = styles.outlineVertical2
                  outlineHorizontal = styles.outlineHorizontal2
              }else{
                outlineVertical = styles.outlineVertical1
                outlineHorizontal = styles.outlineHorizontal1
              }
              if(this.props.type === "presets"){
                item = (
                   <TouchableOpacity
                     style={styles.menuButton}
                     onPress={() =>{
                       this.props.passPresetName(object)
                     }}>
                     <View style={outlineVertical}></View>
                     <View style={outlineHorizontal}></View>
                     {icon}
                     <Text style={styles.text1}>{object}</Text>
                   </TouchableOpacity >
                 )
              }else if(this.props.type === "exportTo"){
                item = (
                   <TouchableOpacity
                     style={styles.menuButton}
                     onPress={() =>{
                       this.props.passPresetName(object)
                     }}>
                     <View style={outlineVertical}></View>
                     <View style={outlineHorizontal}></View>
                         <Icon3 style={styles.icon} name={object} size={25}  color={"white"}/>
                     <Text style={styles.text1}>{object}</Text>
                   </TouchableOpacity >
                 )
              }else{
                item = (
                   <TouchableOpacity
                     style={styles.menuButton}
                     onPress={() =>{
                       this.props.passPresetName(object)
                     }}>
                     <View style={outlineVertical}></View>
                     <View style={outlineHorizontal}></View>
                     {icon[index]}
                     <Text style={styles.text1}>{object}</Text>
                   </TouchableOpacity >
                 )
              }

            if(this.state.open){
            return(item)
            }
      })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1:{
    color:"white",
    fontSize:20,
    marginLeft:15,
  },
  text2:{
      color:"white",
      fontSize:20,
      marginRight:15,
    },
    menuButton:{
      alignItems:"center",
      padding:20,
      flexDirection:"row",
      backgroundColor:"rgba(0, 0, 0, 0.1)",
    },
    icon:{
      marginLeft:10,
    },
    outlineVertical1:{
      marginLeft:10,
      width:1,
      height:"223%",
      backgroundColor:"white",
    },
    outlineVertical2:{
      left:20,
      marginLeft:10,
      width:1,
      position:"absolute",
      top:0,
      height:"113%",
      backgroundColor:"white",
    },
    outlineHorizontal1:{
      width:20,
      height:1,
      backgroundColor:"white"
    },
    outlineHorizontal2:{
      marginLeft:10,
      width:20,
      height:1,
      backgroundColor:"white"
    }
})
