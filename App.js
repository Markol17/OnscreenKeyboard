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
class Container extends React.Component {

  render() {
    const {
      children,
      title,
      onInit,
    } = this.props;

    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.title}
        >
          {"Placeholder"}
        </Text>

        <DragResizeContainer
          style={styles.canvas}
          onInit={onInit}
        >
          {children}
        </DragResizeContainer>
      </View>
    );
  }
}

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
    };
  }
  render(){
    return(
      <Container
        title="Default props"
        onInit={(limitation) => {
          this.setState(() => {
            this.state.limitation1 = limitation;
            return this.state;
          });
        }}
      >
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
            backgroundColor: 'white',
            borderWidth:2,
            borderColor:'black',
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

          }}>
          <Text style={{
            fontSize: 60,
            }}>A</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={200}
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
            backgroundColor: 'white',
            borderWidth:2,
            borderColor:'black',
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

          }}>
          <Text style={{
            fontSize: 60,
            }}>Table</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={100}
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
            backgroundColor: 'white',
            borderWidth:2,
            borderColor:'black',
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

          }}>
          <Text style={{
            fontSize: 60,
            }}>B</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={300}
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
            backgroundColor: 'white',
            borderWidth:2,
            borderColor:'black',
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

          }}>
          <Text style={{
            fontSize: 60,
            }}>D</Text>
          </View>
      </DragResizeBlock>
      </Container>
  );
  }
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
    marginTop: 4,
  },
  Container:{

    },
  title:{
    fontSize:20,


    },
});

export default Main;
