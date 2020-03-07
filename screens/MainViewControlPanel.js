import React, { Component } from 'react';
import {
  //SwitchIOS,
  View,
  Text,
  TouchableOpacity ,
  StyleSheet,
  ScrollView,
} from 'react-native';

import DropDownItem from "react-native-drop-down-item";
import Button from '../components/OpenCloseButton';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';
import DropDown from '../components/DropDown';


export default class EditViewControlPanel extends Component {

  render() {
    const { closeDrawer, presets, returnedPreset, returnedExport, exports, goToEdit, goToSettings} = this.props;
    return (
      <View style={styles.controlPanel}>
        <View style={styles.header}>
          <Text style={styles.menu}>Main Menu</Text>
          <Button
            onPress={() => {
              closeDrawer();
            }}
            icon="close"
            style={styles.closeButton}
          />
        </View>
        <ScrollView>
          <View style={styles.menuItems}>
            <DropDown  name="Presets" data={presets} passPresetName={(presetName) => returnedPreset(presetName)}/>
            <View style={styles.bar}></View>
            <DropDown  name="Export to" data={exports} passPresetName={(exportName) => returnedExport(exportName)}/>
            <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => goToEdit()}>
              <Text style={styles.text2}>Edit</Text>
              <Icon2 name="ios-arrow-forward" size={25}  color={"white"}/>
                    </TouchableOpacity >
                    <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}
                        onPress={() => goToSettings()}>
               <Icon2 name="md-settings" size={30} color={"white"} />
              <Text style={styles.text1}>Settings</Text>

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
     marginLeft:10,
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
     backgroundColor:"#f5a638",//#32a852
  },
})
