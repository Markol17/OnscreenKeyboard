import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Fontisto';

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      arrow: 'ios-arrow-down',
    };
  }

  outlineVertical1(context) {
    return {
      marginLeft: 10,
      width: 1,
      height: '223%',
      backgroundColor: context.theme.outlineColor,
    };
  }

  outlineVertical2(context) {
    return {
      left: 20,
      marginLeft: 10,
      width: 1,
      position: 'absolute',
      top: 0,
      height: '113%',
      backgroundColor: context.theme.outlineColor,
    };
  }

  outlineHorizontal1(context) {
    return {
      width: 20,
      height: 1,
      backgroundColor: context.theme.outlineColor,
    };
  }

  outlineHorizontal2(context) {
    return {
      marginLeft: 10,
      width: 20,
      height: 1,
      backgroundColor: context.theme.outlineColor,
    };
  }

  text1(context) {
    return {
      color: context.theme.fontColor,
      fontSize: 20,
      marginLeft: 15,
    };
  }

  text2(context) {
    return {
      color: context.theme.fontColor,
      fontSize: 20,
      marginRight: 15,
    };
  }

  render() {
    const { context } = this.props;
    let icon;
    if (this.props.name === 'Presets') {
      icon = (
        <Icon1
          style={styles.icon}
          name="keyboard-o"
          size={32}
          color={context.theme.fontColor}
        />
      );
    } else if (this.props.name === 'Options') {
      icon = (
        <Icon2
          style={styles.icon}
          name="md-options"
          size={32}
          color={context.theme.fontColor}
        />
      );
    }
    return (
      <View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            this.setState({
              open: !this.state.open,
            });
            if (this.state.open) {
              this.setState({
                arrow: 'ios-arrow-down',
              });
            } else {
              this.setState({
                arrow: 'ios-arrow-up',
              });
            }
          }}>
          <Text style={this.text2(context)}>{this.props.name}</Text>
          <Icon2
            name={this.state.arrow}
            size={25}
            color={context.theme.fontColor}
          />
        </TouchableOpacity>

        {this.props.data.map((object, index) => {
          let item = null;
          let outlineVertical = this.outlineVertical1(context);
          let outlineHorizontal = this.outlineHorizontal1(context);

          if (index === this.props.data.length - 1) {
            outlineVertical = this.outlineVertical2(context);
            outlineHorizontal = this.outlineHorizontal2(context);
          } else {
            outlineVertical = this.outlineVertical1(context);
            outlineHorizontal = this.outlineHorizontal1(context);
          }
          if (this.props.name === 'Presets') {
            item = (
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => {
                  this.props.passPresetName(object);
                }}>
                <View style={outlineVertical}></View>
                <View style={outlineHorizontal}></View>
                {icon}
                <Text style={this.text1(context)}>{object}</Text>
              </TouchableOpacity>
            );
          } else if (this.props.name === 'Export to') {
            item = (
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => {
                  this.props.passPresetName(object);
                }}>
                <View style={outlineVertical}></View>
                <View style={outlineHorizontal}></View>
                <Icon3
                  style={styles.icon}
                  name={object}
                  size={25}
                  color={context.theme.fontColor}
                />
                <Text style={this.text1(context)}>{object}</Text>
              </TouchableOpacity>
            );
          } else {
            item = (
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => {
                  this.props.passPresetName(object);
                }}>
                <View style={outlineVertical}></View>
                <View style={outlineHorizontal}></View>
                {icon[index]}
                <Text style={this.text1(context)}>{object}</Text>
              </TouchableOpacity>
            );
          }

          if (this.state.open) {
            return item;
          }
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menuButton: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  icon: {
    marginLeft: 10,
  },
});
