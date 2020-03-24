import React, { Component } from 'react';
import { View, Dimensions, Clipboard } from 'react-native';

import Drawer from 'react-native-drawer';
import Renderer from './MainViewRenderer';
import MainViewControlPanel from './MainViewControlPanel';

import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';

import * as firebase from 'firebase';
import AppStatesContext from '../components/context/AppStatesContext';
// import tweens from './tweens';

const { width } = Dimensions.get('window');
const exportTo = ['google', 'email'];

export default class MainViewController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset: width / 2 + width / 6,
      closedDrawerOffset: 0,
      relativeDrag: false,
      panThreshold: 0.15,
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: true,
      side: 'left',

      presets: [],
    };
  }

  static contextType = AppStatesContext;

  componentWillMount() {
    this.context.reset();
    this.get('Default');
    this.getAll();
  }

  getAll() {
    firebase
      .database()
      .ref()
      .on('value', data => {
        const output = Object.keys(data.val());
        const previous = [];
        for (let i = 0; i < output.length; i++) {
          previous.push(output[i]);
        }
        this.setState({
          presets: previous,
        });
      });
  }

  get(name) {
    firebase
      .database()
      .ref(name)
      .on(
        'value',
        data => {
          this.context.setKeysData(data.val());
          showMessage({
            message: 'Success',
            description: 'Preset loaded succesfully!',
            type: 'success',
          });
        },
        function(error) {
          showMessage({
            message: 'Error',
            description:
              'An error occured while trying to retrieve this preset. You may want to check your internet connection.',
            type: 'danger',
          });
        },
      );
  }

  //should go in editviewcontrol
  push(name, content) {
    firebase
      .database()
      .ref(name)
      .set(content)
      .then(() => {
        console.log('Inserted');
      })
      .catch(error => {
        console.log(error);
      });
  }

  copyToClipboard = string => {
    Clipboard.setString(string);
    let description = 'There is nothing to copy!';
    let message = 'Error';
    if (string.length != 0) {
      description = 'Copied "' + string + '" to clipboard succesfully!';
      message = 'Copied';
    }
    showMessage({
      message: message,
      description: description,
      type: 'info',
    });
  };

  openDrawer = () => {
    this.drawer.open();
  };

  closeDrawer = () => {
    this.drawer.close();
  };

  render() {
    const { navigation } = this.props;
    const mainViewControlPanel = (
      <MainViewControlPanel
        context={this.context}
        closeDrawer={this.closeDrawer}
        navigation={navigation}
        returnedPreset={presetName => {
          this.get(presetName);
        }}
        returnedExport={exportName => {
          console.log(exportName);
        }}
        exports={exportTo}
        presets={this.state.presets}
      />
    );

    return (
      <View style={{ height: '100%', height: '100%' }}>
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={mainViewControlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          negotiatePan={true}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          side={this.state.side}>
          <Renderer
            context={this.context}
            openDrawer={this.openDrawer}
            copyToClipboard={this.copyToClipboard}
            exportTo={this.state.exportName}
          />
        </Drawer>
        <FlashMessage position="top" icon="auto" />
      </View>
    );
  }
}

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
};
