import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
//props: data, style, icon
export default class DropDown extends Component {
  render() {
    let icon;
    if(this.props.icon === "keyboard"){
      icon = <Icon1 name="keyboard-o" size={40}  color={"white"}/>;
    }else{
      icon = <Icon2 name="md-options" size={60}  color={"white"}/>;
    }
    return(
      {this.props.data.map((object, index) => {
        let item = "";
        if(object.){
          item = (
            <TouchableOpacity
              style={this.props.style}
              underlayColor="#B5B5B5"
              onPress={() => {
                this.props.onPress();
              }}>
              {icon}
            </TouchableOpacity>
          )
        }
        return(item)
      })}
    )
  }
}
