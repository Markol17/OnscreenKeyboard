import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Button extends Component {
  render() {
    let icon;
    if(this.props.icon === "open"){
      icon = <Icon name="menu" size={40}  color={"white"}/>;
    }else{
      icon = <Icon name="close" size={60}  color={"white"}/>;
    }
    return(
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
}
