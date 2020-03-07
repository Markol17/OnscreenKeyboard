import React from 'react';
import {DragResizeBlock} from 'react-native-drag-resize';
import {
    View
  } from 'react-native';

  export default class SpaceKey extends React.Component {
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
                      if(this.state.enabled === true){
                      setState({
                          content: this.state.content + " ",
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
                      </View>
                  </DragResizeBlock>
          )
      }
  }