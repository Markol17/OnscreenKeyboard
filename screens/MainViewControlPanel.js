import React, { Component } from 'react';
import {
  //SwitchIOS,
  View,
  Text,
  TouchableOpacity ,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Button from '../components/OpenCloseButton';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';


//NOT DONE YET


export default class EditViewControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <View style={styles.header}>
          <Text style={styles.menu}>Main Menu</Text>
          <Button
            onPress={() => {
              this.props.closeDrawer();
            }}
            icon="close"
            style={styles.closeButton}
          />
        </View>
        <ScrollView>
          <View style={styles.menuItems}>
            <TouchableOpacity
              style={styles.menuButton}>
              <Text style={styles.text2}>Presets</Text>
              <Icon2 name="ios-arrow-down" size={25}  color={"white"}/>
            </TouchableOpacity >
            <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}>
              <Text style={styles.text2}>Export to</Text>
              <Icon2 name="ios-arrow-down" size={25}  color={"white"}/>
            </TouchableOpacity >
            <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}>
              <Icon1 name="google" size={25}  color={"white"}/>
              <Text style={styles.text1}>Google</Text>
            </TouchableOpacity >
            <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}>
              <Icon1 name="email" size={25}  color={"white"}/>
              <Text style={styles.text1}>Email</Text>
            </TouchableOpacity >
            <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}>
              <Icon2 name="md-clipboard" size={25}  color={"white"}/>
              <Text style={styles.text1}>Clipboard</Text>
            </TouchableOpacity >
            <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => this.props.goToEdit()}>
              <Text style={styles.text2}>Edit</Text>
              <Icon2 name="ios-arrow-forward" size={25}  color={"white"}/>
            </TouchableOpacity >

          </View>
        </ScrollView>
      </View>
    )
  }
}
//goBack() react navigation
const styles = StyleSheet.create({
  text1:{
    color:"white",
    fontSize:20,
    marginLeft:15,

  },
  text2:{
      color:"white",
      fontSize:20,
      marginRight:15,
    },
   controlPanel: {
     flex: 1,
     flexDirection:"column",
     backgroundColor:'#1a1a1a',
   },
   header:{
     //backgroundColor:"red",
     flexDirection:"row",
     justifyContent:"center",
     alignItems:"center",
     paddingTop:15,
     paddingBottom:15,
     backgroundColor:"rgba(0, 0, 0, 0.1)",
    elevation: 1,
   },
   closeButton:{
     width:60,
     height:60,
     marginLeft:20,
   },
   menu: {
     fontSize: 30,
     textAlign: 'center',
     color:'white',
     fontWeight:'bold',
   },
   menuItems:{

   },
   menuButton:{
     alignItems:"center",
     padding:20,
     flexDirection:"row",
     backgroundColor:"rgba(0, 0, 0, 0.1)",
   },
   bar:{
     height:1,
     width: "82%",
     backgroundColor:"#f5a638",
  },
})
