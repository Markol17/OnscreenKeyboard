import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';

import Button from '../components/OpenCloseButton';
import DelKey from '../components/keyTypes/DelKey';
import SpaceKey from '../components/keyTypes/SpaceKey';
import ShiftKey from '../components/keyTypes/ShiftKey';
import ModalKey from '../components/keyTypes/ModalKey';
import CapsKey from '../components/keyTypes/CapsKey';
import GeneralKey from '../components/keyTypes/GeneralKey';

import Icon from 'react-native-vector-icons/Ionicons';
import { DragResizeContainer } from 'react-native-drag-resize';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};
//
// <TouchableOpacity
//   style={styles.menuButton}>
//   <Icon2 name="md-clipboard" size={25}  color={"white"}/>
// </TouchableOpacity >

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true,
      content: '',
      capsLock: false,
      shift: false,
    };
  }
  // componentWillReceiveProps(){
  //   this.exportTo(this.props.exportTo)
  // }

  exportTo(exportName) {
    if (exportName === 'google') {
      Linking.openURL(
        'https://google.com/search?q=' + this.state.content,
      ).catch(err =>
        showMessage({
          message: 'Error',
          description:
            'An error occured while trying to retrieve this preset. You may want to check your internet connection.',
          type: 'danger',
        }),
      );
    } else if (exportName === 'email') {
      console.log(exportName);
    }
  }

  triggerHapticFeedback(type, options) {
    ReactNativeHapticFeedback.trigger(type, options);
  }

  setState(object) {
    //use context instead
    // this.setState({
    // });
  }

  render() {
    const { openDrawer, copyToClipboard, data } = this.props;
    const { isEnabled, content, capsLock, shift } = this.state;

    return (
      <View>
        <View style={styles.header}>
          <Button
            onPress={() => {
              openDrawer();
            }}
            icon="open"
            style={styles.button}
          />

          <Text style={styles.textInput}>{content}</Text>
          <TouchableOpacity
            style={styles.clipboard}
            onPress={() => {
              copyToClipboard(content);
            }}>
            <Icon name="md-clipboard" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <DragResizeContainer
            style={styles.canvas}
            onInit={() => {
              return null;
            }}>
            {data.map((keyData, index) => {
              let ratio = width / height - 0.989;
              let item = null;

              const dimensions = {
                resizedX: keyData.x * ratio,
                resizedY: keyData.y * ratio,
                resizedWidth: keyData.w * ratio,
                resizedHeight: keyData.h * ratio,
                resizedFont: keyData.fontSize * ratio,
              };

              if (keyData.value === 'Del') {
                item = (
                  <DelKey
                    dimensions={dimensions}
                    index={index}
                    keyData={keyData}
                    options={options}
                    hapticFeedback={this.triggerHapticFeedback}
                    enabled={isEnabled}
                    setState={this.setState}
                    content={content}
                  />
                );
              } else if (keyData.value === 'Space') {
                item = (
                  <SpaceKey
                    dimensions={dimensions}
                    index={index}
                    keyData={keyData}
                    options={options}
                    hapticFeedback={this.triggerHapticFeedback}
                    enabled={isEnabled}
                    setState={this.setState}
                    content={content}
                  />
                );
              } else if (keyData.value === 'Shift') {
                item = (
                  <ShiftKey
                    dimensions={dimensions}
                    index={index}
                    keyData={keyData}
                    options={options}
                    hapticFeedback={this.triggerHapticFeedback}
                    enabled={isEnabled}
                    setState={this.setState}
                    shift={shift}
                  />
                );
              } else if (keyData.value === 'Modal') {
                item = (
                  <ModalKey
                    dimensions={dimensions}
                    index={index}
                    keyData={keyData}
                    options={options}
                    hapticFeedback={this.triggerHapticFeedback}
                    enabled={isEnabled}
                  />
                );
              } else if (keyData.value === 'Caps') {
                item = (
                  <CapsKey
                    dimensions={dimensions}
                    index={index}
                    keyData={keyData}
                    options={options}
                    hapticFeedback={this.triggerHapticFeedback}
                    enabled={isEnabled}
                    setState={this.setState}
                    capsLock={capsLock}
                  />
                );
              } else {
                item = (
                  <GeneralKey
                    dimensions={dimensions}
                    index={index}
                    keyData={keyData}
                    options={options}
                    hapticFeedback={this.triggerHapticFeedback}
                    enabled={isEnabled}
                    setState={this.setState}
                    capsLock={capsLock}
                    shift={shift}
                    content={content}
                  />
                );
              }
              return item;
            })}
          </DragResizeContainer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },

  button: {
    width: 40,
    marginLeft: 7,
  },

  textInput: {
    color: 'white',
    width: width - 125, //55
    height: 40,
    marginRight: 1,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#f5a638', //#f5a638
    fontSize: 22,
    padding: 2,
    paddingLeft: 8,
    //padding:5,
  },
  clipboard: {
    width: 50,
    height: 40,
    marginRight: 7,
    borderColor: '#f5a638',
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //container for the keyboard
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#1a1a1a',
  },
  canvas: {
    width: width,
    height: height - 41.5,
    //backgroundColor:"red",
  },
});
