import React, { Component } from 'react';
import {
  //SwitchIOS,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Button from '../components/OpenCloseButton';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
      
          <Button
            onPress={() => {
              this.props.closeDrawer();
            }}
            icon="close"
          />

      </View>
    )
  }
}
const styles = StyleSheet.create({
   controlPanel: {
     flex: 1,
     backgroundColor:'#292929',
   },
   controlPanelWelcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 25,
     color:'white',
     fontWeight:'bold',
   },
})
