import React from 'react';
import {DragResizeBlock} from 'react-native-drag-resize';
import {
    Text,
    View
  } from 'react-native';

  export default class DelKey extends React.Component {
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
              if(this.state.enabled){
              setState({
                  content: this.state.content.slice(0, -1),
                })
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
                color:keyData.textColor,
              }}>{keyData.value}</Text>
              </View>
          </DragResizeBlock>
          )
      }
  }
