/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {DragResizeBlock, DragResizeContainer,} from 'react-native-drag-resize';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
    };
  }
  render(){
    return(



      <DragResizeBlock
        x={0}
        y={0}
        isDisabled={this.state.enabled}
        onPress = {() => {
          this.setState({
              enabled: !this.state.enabled,
            })
        }}

        connectors={['tl','tr','c','br','bl']}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            borderWidth:2,
            borderColor:'black',
          }}/>
      </DragResizeBlock>

  );
  }
}

const styles = StyleSheet.create({

});

export default Main;
