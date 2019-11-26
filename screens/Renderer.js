import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Button from '../components/OpenCloseButton';
import {DragResizeBlock, DragResizeContainer,} from 'react-native-drag-resize';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
//
// <TouchableOpacity
//   style={styles.menuButton}>
//   <Icon2 name="md-clipboard" size={25}  color={"white"}/>
// </TouchableOpacity >
//797
const presetExample = [
    {
      id:1,
      value:"Q",
      x:0,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:2,
      value:"W",
      x:70,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:3,
      value:"E",
      x:140,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:4,
      value:"R",
      x:210,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:5,
      value:"T",
      x:280,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:6,
      value:"Y",
      x:350,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:7,
      value:"U",
      x:420,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:8,
      value:"I",
      x:490,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:9,
      value:"O",
      x:560,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:10,
      value:"P",
      x:630,
      y:10,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:11,
      value:"Del",
      x:700,
      y:10,
      w:103,
      h:80,
      fontSize:35,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:12,
      value:"A",
      x:15.3,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:13,
      value:"S",
      x:101.6,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:14,
      value:"D",
      x:188.9,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:15,
      value:"F",
      x:274.2,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:16,
      value:"G",
      x:360.5,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:17,
      value:"H",
      x:446.8,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:18,
      value:"J",
      x:533.1,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:19,
      value:"K",
      x:619.4,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:20,
      value:"L",
      x:705.7,
      y:90,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:21,
      value:"Shift",
      x:0.66,
      y:170,
      w:120,
      h:80,
      fontSize:40,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:22,
      value:"Z",
      x:120.32,
      y:170,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:23,
      value:"X",
      x:199.98,
      y:170,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:24,
      value:"C",
      x:279.64,
      y:170,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:25,
      value:"V",
      x:359.3,
      y:170,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:26,
      value:"B",
      x:438.96,
      y:170,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:27,
      value:"N",
      x:518.62,
      y:170,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:28,
      value:"M",
      x:598.28,
      y:170,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:29,
      value:"Caps",
      x:677.94,
      y:170,
      w:120,
      h:80,
      fontSize:40,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:30,
      value:"Modal",
      x:12.5,
      y:250,
      w:120,
      h:80,
      fontSize:35,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:31,
      value:",",
      x:138,
      y:250,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:32,
      value:"Space",
      x:223.5,
      y:250,
      w:350,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:33,
      value:".",
      x:579,
      y:250,
      w:80,
      h:80,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:34,
      value:"Modal",
      x:664.5,
      y:250,
      w:120,
      h:80,
      fontSize:35,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
  ]

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
        content: "",
    };
  }
  render() {

    return (
    <View>
    <View style={styles.header}>
      <Button
      onPress={() => {
        this.props.openDrawer();
      }}
        icon="open"
        style={styles.button}
      />

    <Text style={styles.textInput}>{this.state.content}</Text>

    </View>
    <View style={styles.container}>
      <DragResizeContainer
        style={styles.canvas}
        onInit={() => {
          return null
        }}
      >
     {presetExample.map((object, index) => {

       let item = "Error";
       if(object.value === "Del"){
         item = (
                  <DragResizeBlock
                    x={object.x}
                    y={object.y}
                    w={object.w}
                    h={object.h}
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
                        backgroundColor: object.backgroundColor,
                        borderWidth:2,
                        borderColor:'white',
                        borderRadius:4,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",

                      }}>
                      <Text style={{
                        fontSize: object.fontSize,
                        color:object.textColor,
                      }}>{object.value}</Text>
                      </View>
                  </DragResizeBlock>
         )
       }
       else if (object.value === "Space" ) {
         item = (
                  <DragResizeBlock
                    x={object.x}
                    y={object.y}
                    w={object.w}
                    h={object.h}
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
                        backgroundColor: object.backgroundColor,
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
       else if (object.value === "Shift"){
         item = (
                  <DragResizeBlock
                    x={object.x}
                    y={object.y}
                    w={object.w}
                    h={object.h}
                    isDisabled={this.state.enabled}
                    onPress = {() => {
                      console.log("Shift")
                    }}

                    connectors={['tl','tr','c','br','bl']}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: object.backgroundColor,
                        borderWidth:2,
                        borderColor:'white',
                        borderRadius:4,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",

                      }}>
                      <Text style={{
                        fontSize: object.fontSize,
                        color:object.textColor,
                      }}>{object.value}</Text>
                      </View>
                  </DragResizeBlock>
         )

       }
       else if(object.value === "Modal") {
         item = (
                  <DragResizeBlock
                    x={object.x}
                    y={object.y}
                    w={object.w}
                    h={object.h}
                    isDisabled={this.state.enabled}
                    onPress = {() => {
                      console.log("Modal")
                    }}

                    connectors={['tl','tr','c','br','bl']}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: object.backgroundColor,
                        borderWidth:2,
                        borderColor:'white',
                        borderRadius:4,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",

                      }}>
                      <Text style={{
                        fontSize: object.fontSize,
                        color:object.textColor,
                      }}>?123</Text>
                      </View>
                  </DragResizeBlock>
         )

       }
       else if(object.value === "Caps"){
         item = (
                  <DragResizeBlock
                    x={object.x}
                    y={object.y}
                    w={object.w}
                    h={object.h}
                    isDisabled={this.state.enabled}
                    onPress = {() => {
                      console.log("Caps")
                    }}

                    connectors={['tl','tr','c','br','bl']}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: object.backgroundColor,
                        borderWidth:2,
                        borderColor:'white',
                        borderRadius:4,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",

                      }}>
                      <Text style={{
                        fontSize: object.fontSize,
                        color:object.textColor,
                      }}>{object.value}</Text>
                      </View>
                  </DragResizeBlock>
         )
       }
       else{

            item =( <DragResizeBlock
                  x={object.x}
                  y={object.y}
                  w={object.w}
                  h={object.h}
                  isDisabled={this.state.enabled}
                  onPress = {() => {
                    if(this.state.enabled === true){
                    this.setState({
                        content: this.state.content + object.value,
                      })
                    }
                  }}

                  connectors={['tl','tr','c','br','bl']}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: object.backgroundColor,
                      borderWidth:2,
                      borderColor:'white',
                      borderRadius:4,
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",

                    }}>
                    <Text style={{
                      fontSize: object.fontSize,
                      color:object.textColor,
                    }}>{object.value}</Text>
                    </View>
                </DragResizeBlock>
              )
       }
       return(
         item
       )
      })}
      </DragResizeContainer>
    </View>
    </View>
    );
  }
};
const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#1a1a1a",
  },

   button: {
    width:40,
    marginLeft: 7,
   },

   textInput:{
     //backgroundColor:"#f7f7f7",
     color:"white",
     width: width-55,
     height:40,
     marginRight:1,
     borderWidth:2,
     borderRadius:4,
     borderColor:"#f5a638",//#f5a638
     fontSize:22,
     padding:2,
     paddingLeft:8,
     //padding:5,
   },
   //container for the keyboard
   container:{
     height:"100%",
     backgroundColor:"#1a1a1a",
   },
   canvas:{
     width:width,
     height:height-41.5,
    //backgroundColor:"red",
   },
})
