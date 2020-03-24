import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import CloseButton from '../components/CloseButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DropDown from '../components/DropDown';

export default class EditViewControlPanel extends Component {
  line(context) {
    return {
      height: 1,
      width: '82%',
      backgroundColor: context.theme.outlineColor,
    };
  }

  controlPanel(context) {
    return {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: context.theme.backgroundColor,
    };
  }

  menuText(context) {
    return {
      fontSize: 30,
      textAlign: 'center',
      color: context.theme.fontColor,
      fontWeight: 'bold',
    };
  }

  settingsText(context) {
    return {
      color: context.theme.fontColor,
      fontSize: 20,
      marginLeft: 15,
    };
  }

  editText(context) {
    return {
      color: context.theme.fontColor,
      fontSize: 20,
      marginRight: 15,
    };
  }

  render() {
    const {
      closeDrawer,
      presets,
      returnedPreset,
      returnedExport,
      exports,
      navigation,
      context,
    } = this.props;
    return (
      <View style={this.controlPanel(context)}>
        <View style={styles.header}>
          <Text style={this.menuText(context)}>Main Menu</Text>
          <CloseButton
            onPress={() => {
              closeDrawer();
            }}
            context={context}
            style={styles.closeButton}
          />
        </View>
        <ScrollView>
          <View>
            <DropDown
              context={context}
              name="Presets"
              data={presets}
              passPresetName={presetName => returnedPreset(presetName)}
            />
            <View style={this.line(context)}></View>
            <DropDown
              context={context}
              name="Export to"
              data={exports}
              passPresetName={exportName => returnedExport(exportName)}
            />
            <View style={this.line(context)}></View>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.navigate('EditView')}>
              <Text style={this.editText(context)}>Edit</Text>
              <IonIcon
                name="ios-arrow-forward"
                size={25}
                color={context.theme.fontColor}
              />
            </TouchableOpacity>
            <View style={this.line(context)}></View>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() =>
                navigation.navigate('SettingsView', { context: context })
              }>
              <IonIcon
                name="md-settings"
                size={30}
                color={context.theme.fontColor}
              />
              <Text style={this.settingsText(context)}>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
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
    marginLeft: 10,
  },
  menuButton: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
