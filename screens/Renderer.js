import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Button from '../components/OpenCloseButton';


const { width } = Dimensions.get("window");

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,

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

    <Text style={styles.textInput} >hello</Text>

    </View>
    <View style={styles.container}>
      <Text>Renderer</Text>
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
     borderColor:"#f5a638",
     fontSize:22,
     padding:2,
     paddingLeft:8,
     //padding:5,
   },
   container:{
     height:"100%",
     backgroundColor:"#1a1a1a",
   },
})
