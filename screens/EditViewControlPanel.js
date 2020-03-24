import React, { Component } from 'react';
import {
  //SwitchIOS,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import DropDownItem from 'react-native-drop-down-item';
import CloseButton from '../components/CloseButton';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default class EditViewControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <View style={styles.header}>
          <Text style={styles.menu}>Edit Menu</Text>
          <CloseButton
            onPress={() => {
              this.props.closeDrawer();
            }}
            style={styles.closeButton}
          />
        </View>
        <ScrollView>
          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuButton}>
              <Icon1 name="save" size={25} color={'white'} />
              <Text style={styles.text1}>Save</Text>
            </TouchableOpacity>
            <View style={styles.bar}></View>
            <TouchableOpacity style={styles.menuButton}>
              <Icon1 name="save-1" size={25} color={'white'} />
              <Text style={styles.text1}>Save as</Text>
            </TouchableOpacity>
            <View style={styles.bar}></View>
            <TouchableOpacity style={styles.menuButton}>
              <Icon1 name="plus-a" size={25} color={'white'} />
              <Text style={styles.text1}>Add Key</Text>
            </TouchableOpacity>
            <View style={styles.bar}></View>
            <TouchableOpacity style={styles.menuButton}>
              <Icon1 name="search" size={25} color={'white'} />
              <Text style={styles.text1}>Option1</Text>
            </TouchableOpacity>
            <View style={styles.bar}></View>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => this.props.goBack()}>
              <Icon2 name="ios-arrow-back" size={25} color={'white'} />
              <Text style={styles.text1}>Keyboard</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    marginRight: 15,
  },
  controlPanel: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
  },
  header: {
    //backgroundColor:"red",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 1,
  },
  closeButton: {
    width: 60,
    height: 60,
    marginLeft: 20,
  },
  menu: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  menuItems: {},
  menuButton: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  bar: {
    height: 1,
    width: '82%',
    backgroundColor: '#f5a638',
  },
});
