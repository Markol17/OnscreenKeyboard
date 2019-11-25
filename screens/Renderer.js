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

const presetExample = [
    {
      id:1,
      value:"Q",
      x:0,
      y:0,
      w:100,
      h:100,
      fontSize:60,
      textColor:"white",
      backgroundColor:"transparent",
      keyPress:"1",
      onKeyRelease:false,
    },
    {
      id:2,
      value:"W",
      x:90,
      y:0,
      w:100,
      h:100,
      fontSize:60,
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
      content:"",
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
       //console.log(object.x);
       return(
       <DragResizeBlock
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
