import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ColorPalette from 'react-native-color-palette';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';

const colors = [
  '#C0392B',
  '#E74C3C',
  '#f5a638',
  '#ede02b',
  '#9B59B6',
  '#8E44AD',
  '#2980B9',
  '#32a852',
  '#1a1a1a',
  '#FFFFFF',
];

export default class SettingsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#1a1a1a',
      fontColor: '#FFFFFF',
      outlineColor: '#f5a638',
    };
    this.flashMessageContainer = React.createRef();
  }

  handleSave = () => {
    const { context } = this.props.route.params;
    showMessage({
      message: 'Success',
      description: 'Theme saved succesfully!',
      type: 'success',
    });
    context.setTheme(this.state);
  };

  render() {
    const { context } = this.props.route.params;
    const BackgroundColorPicker = () => {
      return (
        <ColorPalette
          onChange={color =>
            this.setState({
              backgroundColor: color,
            })
          }
          value={this.state.backgroundColor}
          colors={colors}
          title={null}
          icon={
            <MaterialCommunityIcon
              name={'check-circle-outline'}
              size={25}
              color={'white'}
            />
          }
        />
      );
    };

    const FontColorPicker = () => {
      return (
        <ColorPalette
          onChange={color =>
            this.setState({
              fontColor: color,
            })
          }
          value={this.state.fontColor}
          colors={colors}
          title={null}
          icon={
            <MaterialCommunityIcon
              name={'check-circle-outline'}
              size={25}
              color={'white'}
            />
          }
        />
      );
    };

    const OutlineColorPicker = () => {
      return (
        <ColorPalette
          onChange={color =>
            this.setState({
              outlineColor: color,
            })
          }
          value={this.state.outlineColor}
          colors={colors}
          title={null}
          icon={
            <MaterialCommunityIcon
              name={'check-circle-outline'}
              size={25}
              color={'white'}
            />
          }
        />
      );
    };

    return (
      <View
        ref={this.flashMessageContainer}
        style={this.containerStyle(this.state)}>
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={style.backButton}>
            <IonIcon
              name="ios-arrow-back"
              size={45}
              color={this.state.fontColor}
            />
          </TouchableOpacity>
          <Text style={this.headerStyle(this.state)}>Settings</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={this.textStyle(this.state)}>
              Select a background colour
            </Text>
            <BackgroundColorPicker />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={this.textStyle(this.state)}>Select a font colour</Text>
            <FontColorPicker />
          </View>

          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={this.textStyle(this.state)}>
              Select an outline colour
            </Text>
            <OutlineColorPicker />
          </View>
        </View>
        <TouchableOpacity
          onPress={this.handleSave}
          style={this.saveButton(this.state)}>
          <Text style={this.buttonText(this.state)}>Save</Text>
        </TouchableOpacity>
        <FlashMessage
          ref={this.flashMessageContainer}
          position="top"
          icon="auto"
        />
      </View>
    );
  }

  buttonText = state => {
    return {
      color: state.fontColor,
      fontSize: 20,
      fontWeight: 'bold',
    };
  };
  //   onPress={() => navigation.navigate('EditView')}>
  saveButton = state => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      width: 180,
      padding: 15,
      marginBottom: 20,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: state.outlineColor,
      borderRadius: 5,
    };
  };

  headerStyle = state => {
    return {
      color: state.fontColor,
      textAlign: 'center',
      fontSize: 40,
      paddingBottom: 20,
      fontWeight: 'bold',
    };
  };

  containerStyle = state => {
    return {
      height: '100%',
      width: '100%',
      backgroundColor: state.backgroundColor,
      alignItems: 'center',
    };
  };

  themePreview = (color, state) => {
    return {
      margin: 5,
      height: 35,
      width: 35,
      backgroundColor: color,
      borderColor: this.state.outlineColor,
      borderWidth: 1,
    };
  };

  textStyle = state => {
    return {
      fontSize: 15,
      color: state.fontColor,
      margin: 5,
      textAlign: 'center',
      fontWeight: 'bold',
    };
  };

  borderStyle = state => {
    return {
      height: '100%',
      width: 1,
      backgroundColor: state.outlineColor,
    };
  };
}

const style = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
});
