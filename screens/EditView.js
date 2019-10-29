/**
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
 import HamburgerMenu from './HamburgerMenu';

class Container extends React.Component {

  render() {
    const {
      children,
      text_bar,
      onInit,
      hamburgerItems,
    } = this.props;

    return (
      <View
        style={styles.container}
      >

      <View
        style={styles.header}
      >
        <HamburgerMenu
        items={hamburgerItems}
        />
        <Text
          style={styles.text_bar}
        >
          {text_bar}
        </Text>

      </View>
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
      enabled: true,
      content:"",
    };
  }
  render(){

    return(
      <Container
        text_bar={this.state.content}
        onInit={(limitation) => {
          this.setState(() => {
            this.state.limitation1 = limitation;
            return this.state;
          });
        }}
        hamburgerItems={"hello"}
      >
      <DragResizeBlock
        x={10}
        y={0}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "A",
            })
          }
        }}

        connectors={['tl','tr','c','br','bl']}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#36d165',
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
        x={500}
        y={0}
        w={250}
        h={250}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
            this.setState({

                content: this.state.content + "Table",
              })
            }
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
        x={120}
        y={0}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "B",
            })
          }
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
        x={230}
        y={0}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "D",
            })
          }
        }}

        connectors={['tl','tr','c','br','bl']}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#e330d7',
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
      <DragResizeBlock
        x={190}
        y={250}
        w={400}
        h={100}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + " ",
            })
          }
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
            }}>Space</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={250}
        y={110}
        w={250}
        h={120}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({
              content: this.state.content.slice(0, -1),
            })
          }
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
            }}>Delete</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={20}
        y={110}
        w={200}
        h={120}
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
            }}>Edit</Text>
          </View>
      </DragResizeBlock>
      </Container>
  );
  }
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height:'90%',

    zIndex:0,
  },
  Container:{
    flex: 1,
    flexDirection:'column',
      justifyContent: 'space-between',
    },
  text_bar:{
    fontSize:20,
    height:'100%',
    maxHeight:40,
    maxWidth:'90%',
    minWidth:'90%',

    backgroundColor:'white',
    borderWidth:2,
    borderColor:'black',

    },
    header:{
      flex:1,
  flexDirection:'row',
  justifyContent: 'space-between',
  zIndex:0,
      },
});

export default Main;
