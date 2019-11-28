import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,

} from 'react-native';


import Button from '../components/OpenCloseButton';

import Icon from 'react-native-vector-icons/Ionicons';
import {DragResizeBlock, DragResizeContainer,} from 'react-native-drag-resize';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
capsLock = false;
shift = false;

//haptic feedback options
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true
};
//
// <TouchableOpacity
//   style={styles.menuButton}>
//   <Icon2 name="md-clipboard" size={25}  color={"white"}/>
// </TouchableOpacity >


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
    <TouchableOpacity style={styles.clipboard} onPress={() => {this.props.copyToClipboard(this.state.content)}}><Icon name="md-clipboard" size={25}  color={"white"}/></TouchableOpacity>
    </View>
    <View style={styles.container}>
      <DragResizeContainer
        style={styles.canvas}
        onInit={() => {
          return null
        }}
      >
     {this.props.data.map((object, index) => {

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
                      ReactNativeHapticFeedback.trigger("impactLight", options);
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
                      ReactNativeHapticFeedback.trigger("impactLight", options);
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
						ReactNativeHapticFeedback.trigger("impactLight", options);
						shift = true;
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
                      ReactNativeHapticFeedback.trigger("impactLight", options);
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
                      capsLock = !capsLock
                      ReactNativeHapticFeedback.trigger("impactLight", options)
                    }}

                    connectors={['tl','tr','c','br','bl']}>
                 <View
                     style={capsViewStyle(object)}>
                      <Text style={capsTextStyle(object)}>{object.value}</Text>
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
					  if (this.state.enabled === true) {
						  if (capsLock || shift) {
                              this.setState({
                                  content: this.state.content + object.value,
							  })
							  if (shift) {
								  shift = false;
							  }
                          } else {
                              this.setState({
                                  content: this.state.content + object.value.toLowerCase()
                              })
                              
                          }
                    }
                    ReactNativeHapticFeedback.trigger("impactLight", options);

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


capsViewStyle = function (object) {
    if (capsLock) {
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
            backgroundColor: object.backgroundColor,
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 4,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }
    }
};

capsTextStyle = function (object) {
    if (capsLock) {
        return {
            fontSize: object.fontSize,
            color: "#1a1a1a",
        }
    } else {
        return {
            fontSize: object.fontSize,
            color: object.textColor,
        }
        
    }
};

const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
        alignItems: "center",
        backgroundColor:'#1a1a1a' ,
  },

   button: {
    width:40,
    marginLeft: 7,
   },

   textInput:{
     //backgroundColor:"#f7f7f7",
     color:"white",
     width: width-125,//55
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
   clipboard:{
     width:50,
     height:40,
     marginRight:7,
     borderColor:"#f5a638",
     borderRadius:4,
     borderWidth:2,
     alignItems:"center",
     justifyContent:"center",
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
