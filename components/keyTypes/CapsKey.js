import React from 'react';
import { DragResizeBlock } from 'react-native-drag-resize';
import { Text, View } from 'react-native';

export default class CapsKey extends React.Component {
  capsViewStyle(object, capsLock) {
    if (capsLock) {
      return {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      };
    } else {
      return {
        width: '100%',
        height: '100%',
        backgroundColor: object.backgroundColor,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      };
    }
  }

  capsTextStyle(object, fontSize, capsLock) {
    if (capsLock) {
      return {
        fontSize: fontSize,
        color: '#1a1a1a',
      };
    } else {
      return {
        fontSize: object.fontSize,
        color: object.textColor,
      };
    }
  }

  render() {
    const {
      dimensions,
      keyData,
      options,
      hapticFeedback,
      index,
      enabled,
      setState,
      capsLock,
    } = this.props;
    return (
      <DragResizeBlock
        x={dimensions.resizedX}
        y={dimensions.resizedY}
        w={dimensions.resizedWidth}
        h={dimensions.resizedHeight}
        key={index}
        isDisabled={enabled}
        onPress={() => {
          setState({
            capsLock: !capsLock,
          });
          hapticFeedback('impactLight', options);
        }}
        connectors={['tl', 'tr', 'c', 'br', 'bl']}>
        <View style={this.capsViewStyle(keyData, capsLock)}>
          <Text
            style={this.capsTextStyle(
              keyData,
              dimensions.resizedFont,
              capsLock,
            )}>
            {keyData.value}
          </Text>
        </View>
      </DragResizeBlock>
    );
  }
}
