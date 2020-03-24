import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class OpenButton extends Component {
  render() {
    const { context, style, onPress } = this.props;

    return (
      <TouchableOpacity
        style={style}
        underlayColor="#B5B5B5"
        onPress={() => {
          onPress();
        }}>
        <Icon name="menu" size={40} color={context.theme.fontColor} />
      </TouchableOpacity>
    );
  }
}
