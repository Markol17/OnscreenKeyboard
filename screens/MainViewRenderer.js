import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';

import OpenButton from '../components/OpenButton';
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

export default class MainView extends React.Component {
  exportTo(exportName) {
    if (exportName === 'google') {
      Linking.openURL(
        'https://google.com/search?q=' + this.state.content,
      ).catch(err =>
        showMessage({
          message: 'Error',
          description:
            'An error occured while trying to make this search. You may want to check your internet connection.',
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

  clipboard(context) {
    return {
      width: 50,
      height: 40,
      marginRight: 7,
      borderColor: context.theme.outlineColor,
      borderRadius: 4,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  container(context) {
    return {
      alignItems: 'center',
      height: '100%',
      backgroundColor: context.theme.backgroundColor,
    };
  }

  header(context) {
    return {
      paddingTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: context.theme.backgroundColor,
    };
  }

  textInput(context) {
    return {
      color: 'white',
      width: width - 125, //55
      height: 40,
      marginRight: 1,
      borderWidth: 2,
      borderRadius: 4,
      borderColor: context.theme.outlineColor,
      fontSize: 22,
      padding: 2,
      paddingLeft: 8,
    };
  }

  render() {
    const { openDrawer, copyToClipboard, context } = this.props;
    return (
      <View>
        <View style={this.header(context)}>
          <OpenButton
            context={context}
            onPress={() => {
              openDrawer();
            }}
            style={styles.button}
          />

          <Text style={this.textInput(context)}>{context.content}</Text>
          <TouchableOpacity
            style={this.clipboard(context)}
            onPress={() => {
              copyToClipboard(context.content);
            }}>
            <Icon
              name="md-clipboard"
              size={25}
              color={context.theme.fontColor}
            />
          </TouchableOpacity>
        </View>
        <View style={this.container(context)}>
          <DragResizeContainer
            style={styles.canvas}
            onInit={() => {
              return null;
            }}>
            {context.keysData.map((keyData, index) => {
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
                    context={context}
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
                    context={context}
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
                    context={context}
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
                    context={context}
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
                    context={context}
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
                    context={context}
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
  button: {
    width: 40,
    marginLeft: 7,
  },

  canvas: {
    width: width,
    height: height - 41.5,
  },
});
