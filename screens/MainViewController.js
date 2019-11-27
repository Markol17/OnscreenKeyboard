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
import MainViewControlPanel from './MainViewControlPanel';

import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

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
      presets:[],
    };
    if (!firebase.apps.length) {
       firebase.initializeApp(config);
    }

  }
  //component is a deprecated method should update in the future
  componentWillMount(){
    this.get("Default")
    this.getAll()
  }
  componentDidUpdate(){
    if(this.state.data.length != 0){
      showMessage({
        message: "Success",
        description:"Preset loaded succesfully!",
        type: "success",
      });
    }
  }
  componentDidMount(){
    if(this.state.data.length === 0){
    showMessage({
      message: "Error",
      description:"An error occured while trying to retrieve this preset. You may want to check your internet connection.",
      type: "danger",
    });
  }
  }
  //db custom methods
  getAll(){
    const previous = this.state.presets
    firebase.database().ref().on("value", (data) => {
      //javascript can be really weird sometimes. Having a for loop here wont affect the performances thaqt much since theres a small amount of items
      const output = Object.keys(data.val())
      for(let i=0; i<output.length; i++){
        previous.push(output[i])
      }
        this.setState({
          presets: previous
        })
    })
  }

  get(name){
    firebase.database().ref(name).on("value", (data) => {
        this.setState({
          data: data.val()
        })
    })
  }
  
  //should go in editviewcontrol
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
    const mainViewControlPanel = <MainViewControlPanel
        closeDrawer={() => {
            this.drawer.close();
        }}
        goToEdit={() => {
            this.props.navigation.navigate("Edit")

        }}
        goToSettings={() => {
            this.props.navigation.navigate("Settings")
        }}
        presets={this.state.presets}
    />
    const renderer = <Renderer
      openDrawer={() => {
        this.drawer.open();
      }}
      data={this.state.data}
    />
    return (
      <View style={{height:"100%", height:"100%"}}>
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
        content={mainViewControlPanel}
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
      <FlashMessage position="top" icon="auto" />
      </View>
    );
  }
}
