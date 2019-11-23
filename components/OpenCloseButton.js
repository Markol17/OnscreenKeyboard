import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Button extends Component {
  render() {
    let icon;
    if(this.props.icon === "open"){
      icon = <Icon name="menu" size={40}  />;
    }else{
      icon = <Icon name="close" size={40}  color={"white"}/>;
    }
    return(
      <TouchableHighlight
        style={this.props.style}
        underlayColor="#B5B5B5"
        onPress={() => {
          this.props.onPress();
        }}>
        {icon}
      </TouchableHighlight>
    )
  }
}
