import React from 'react';
import {DragResizeBlock} from 'react-native-drag-resize';
import {
    Text,
    View
  } from 'react-native';

  export default class ShiftKey extends React.Component {

    shiftViewStyle(keyData) {
        if (this.state.shift) {
            return {
                width: '100%',
                height: '100%',
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 4,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }
        } else {
            return {
                width: '100%',
                height: '100%',
                backgroundColor: keyData.backgroundColor,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 4,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }
        }
    }
  
    shiftTextStyle(keyData, fontSize) {
        if (this.state.shift) {
            return {
                fontSize: fontSize,
                color: "#1a1a1a",
            }
        } else {
            return {
                fontSize: fontSize,
                color: keyData.textColor,
            }
  
        }
    }
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
                hapticFeedback("impactLight", options);
                setState({
                    shift:!this.state.shift
                })
            }}

            connectors={['tl','tr','c','br','bl']}>
            <View
                style={this.shiftViewStyle(keyData)}>
                 <Text style={this.shiftTextStyle(keyData, dimensions.resizedFont)}>{keyData.value}</Text>
                 </View>
          </DragResizeBlock>
          )
      }
  }
