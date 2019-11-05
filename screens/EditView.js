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
        x={-5}
        y={-5}
        isDisabled={this.state.enabled}
        onPress = {() => {
      
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "q",

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
            }}>q</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={85}
        y={-5}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "w",
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
            }}>w</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={175}
        y={-5}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "e",
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
            }}>e</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={265}
        y={-5}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "r",
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
            }}>r</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={355}
        y={-5}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "t",
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
            }}>t</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={445}
        y={-5}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "y",
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
            }}>y</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={535}
        y={-5}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "u",
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
            }}>u</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={625}
        y={-5}
        w={178}

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
            fontSize: 40,
            }}>Delete</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={-5}
        y={85}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "i",
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
            }}>i</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={85}
        y={85}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "o",
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
            }}>o</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={175}
        y={85}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "p",
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
            }}>p</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={265}
        y={85}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "a",
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
            }}>a</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={355}
        y={85}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "s",
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
            }}>s</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={445}
        y={85}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "d",
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
            }}>d</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={535}
        y={85}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "f",
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
            }}>f</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={625}
        y={85}
        w={178}

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
      <DragResizeBlock
        x={-5}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "g",
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
            }}>g</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={85}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "h",
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
            }}>h</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={175}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "j",
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
            }}>j</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={265}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "k",
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
            }}>k</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={355}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "l",
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
            }}>l</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={445}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "z",
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
            }}>z</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={535}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "x",
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
            }}>x</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={625}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "c",
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
            }}>c</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={715}
        y={175}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "v",
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
            }}>v</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={-5}
        y={265}
        w={190}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({


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
            }}>Shift</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={265}
        y={265}
        w={280}
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
            }}></Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={175}
        y={265}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "b",
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
            }}>b</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={535}
        y={265}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "n",
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
            }}>n</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={625}
        y={265}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({
              content: this.state.content + "m",
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
            }}>m</Text>
          </View>
      </DragResizeBlock>
      <DragResizeBlock
        x={715}
        y={265}
        isDisabled={this.state.enabled}
        onPress = {() => {
          if(this.state.enabled === true){
          this.setState({

              content: this.state.content + "M",
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
            fontSize: 30,
            }}>?123</Text>
          </View>
      </DragResizeBlock>
      </Container>
  );
  }
}

const styles = StyleSheet.create({
  canvas: {
    width: '100%',
    height:'100%',
    zIndex:0,
  },
  Container:{
    height:"100%",
    flex: 1,
    flexDirection:'column',
      justifyContent: 'space-between',
      backgroundColor:"transparent",
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
    minHeight:40,
    flex:1,
  flexDirection:'row',
  justifyContent: 'space-between',
  zIndex:0,
      },
});

export default Main;
