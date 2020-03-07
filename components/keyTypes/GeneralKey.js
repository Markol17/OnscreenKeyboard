import React from 'react';
import {DragResizeBlock} from 'react-native-drag-resize';
import {
    Text,
    View
  } from 'react-native';

  export default class GeneralKey extends React.Component {
      render(){
          const { dimensions, keyData, options, hapticFeedback, index, enabled, setState } = this.props;
          return(
            <DragResizeBlock
            x={dimensions.resizedX}
            y={dimensions.resizedY}
            w={dimensions.resizedWidth}
            h={dimensions.resizedHeight}
            key={index}
            isDisabled={enabled}
            onPress = {() => {

                if (this.state.enabled) {
                    if (this.state.capsLock || this.state.shift) {
                        setState({
                            content: this.state.content + keyData.value,
                        })
                        if (this.state.shift) {
                            setState({
                                shift:false
                            })
                    }
                    }
                    else {
                        setState({
                            content: this.state.content + keyData.value.toLowerCase()
                        })
                    }
                }
              hapticFeedback("impactLight", options);

            }}

            connectors={['tl','tr','c','br','bl']}>
            <View
              style={{
                width: '100%',
                height: '100%',

                backgroundColor: keyData.backgroundColor,
                borderWidth:2,
                borderColor:'white',
                borderRadius:4,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",

              }}>
              <Text style={{
                fontSize: dimensions.resizedFont,
                color: keyData.textColor,
              }}>{keyData.value}</Text>
              </View>
          </DragResizeBlock>
          )
      }
  }
