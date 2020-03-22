import React from 'react';
import { DragResizeBlock } from 'react-native-drag-resize';
import { Text, View } from 'react-native';

export default class ModalKey extends React.Component {
  render() {
    const {
      dimensions,
      keyData,
      options,
      hapticFeedback,
      index,
      context,
    } = this.props;
    return (
      <DragResizeBlock
        x={dimensions.resizedX}
        y={dimensions.resizedY}
        w={dimensions.resizedWidth}
        h={dimensions.resizedHeight}
        key={index}
        isDisabled={context.isEnabled}
        onPress={() => {
          hapticFeedback('impactLight', options);
        }}
        connectors={['tl', 'tr', 'c', 'br', 'bl']}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: keyData.backgroundColor,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 4,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: dimensions.resizedFont,
              color: keyData.textColor,
            }}>
            ?123
          </Text>
        </View>
      </DragResizeBlock>
    );
  }
}
