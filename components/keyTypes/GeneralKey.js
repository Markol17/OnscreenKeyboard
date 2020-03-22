import React from 'react';
import { DragResizeBlock } from 'react-native-drag-resize';
import { Text, View } from 'react-native';

export default class GeneralKey extends React.Component {
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
          if (context.isEnabled) {
            if (context.capsLock || context.shift) {
              context.setContent(context.content + keyData.value);

              if (context.shift) {
                context.setShift(false);
              }
            } else {
              context.setContent(context.content + keyData.value.toLowerCase());
            }
          }
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
            {keyData.value}
          </Text>
        </View>
      </DragResizeBlock>
    );
  }
}
