/**
 * rn-drawer example app
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Dimensions,
} from 'react-native';

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

import Drawer from 'react-native-drawer';
import Renderer from './Renderer';
import EditViewControlPanel from './MainViewControlPanel';
//import DataController from '../DataController';
import * as firebase from 'firebase';
// import tweens from './tweens';

const config = {
  apiKey: "AIzaSyBKXeSg3Jx1tNXckG8k3gIjQnFkR_dIEck",
  authDomain: "on-screen-keyboard.firebaseapp.com",
  databaseURL: "https://on-screen-keyboard.firebaseio.com",
  projectId: "on-screen-keyboard",
  storageBucket: "on-screen-keyboard.appspot.com",
  messagingSenderId: "436720630821",
  appId: "1:436720630821:web:261dfd19b98fdf6c8713cc",
  measurementId: "G-H144GX2E2B"
};

const { width } = Dimensions.get("window");
//const ref = new DataController;
export default class EditViewController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset: (width / 2) + (width / 6),
      closedDrawerOffset:0,
      relativeDrag: false,
      panThreshold: .15,

      // tweenHandlerOn: false, animation stuff to make different animations (requires extra file)
      // tweenDuration: 350, animation to make different animations (requires extra file)
      // tweenEasing: 'linear', animation stuff to make different animations (requires extra file)
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: true,
      side: "left",
      data: [],
    };
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(config);
    }
    this.get("Default")
  }

  get(name){
    firebase.database().ref(name).on("value", (data) => {
        this.setState({
          data: data.val()
        })
    })
  }
  push(name, content){
    firebase.database().ref(name).set(
      content
    ).then(() => {
      console.log("Inserted")
    }).catch((error) => {
       console.log(error)
     });

   }

  //animation handler to make different animations (requires extra file)
  // tweenHandler(ratio){
  //   if(!this.state.tweenHandlerPreset){ return {} }
  //   return tweens[this.state.tweenHandlerPreset](ratio)
  // }

  //useless shit (just keeping this there cuz it may be usefull. i dont know)
  // noopChange(){
  //   this.setState({
  //     changeVal: Math.random()
  //   })
  // }

  //some other random ass shit (just keeping this there cuz it may be usefull. i dont know)
  // setStateFrag(frag) {
  //   this.setState(frag);
  // }


  render() {
    var editViewControlPanel = <EditViewControlPanel
        closeDrawer={() => {
            this.drawer.close();
        }}
        goToEdit={() => {
            this.props.navigation.navigate("Edit")

        }}
        goToSettings={() => {
            this.props.navigation.navigate("Settings")
        }}
    />
    var renderer = <Renderer
      openDrawer={() => {
        this.drawer.open();
      }}
      data={this.state.data}
    />
    return (

      <Drawer
        //open={true}
        ref={c => this.drawer = c}
        type={this.state.drawerType}
        //animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        content={editViewControlPanel}
        styles={drawerStyles}
        disabled={this.state.disabled}
        // tweenHandler={this.tweenHandler.bind(this)}
        // tweenDuration={this.state.tweenDuration}
        // tweenEasing={this.state.tweenEasing}
        // acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        side={this.state.side}
        >
        {renderer}
      </Drawer>

    );
  }
}
