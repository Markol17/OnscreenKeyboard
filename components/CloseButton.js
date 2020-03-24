import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class CloseButton extends Component {
  render() {
    const { context, style, onPress } = this.props;

    return (
      <TouchableOpacity
        style={style}
        underlayColor="#B5B5B5"
        onPress={() => {
          onPress();
        }}>
        <Icon name="close" size={60} color={context.theme.fontColor} />
      </TouchableOpacity>
    );
  }
}
