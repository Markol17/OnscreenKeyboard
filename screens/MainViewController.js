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
  Clipboard,
} from 'react-native';

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

import Drawer from 'react-native-drawer';

import Renderer from './MainViewRenderer';
import MainViewControlPanel from './MainViewControlPanel';

import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

import * as firebase from 'firebase';
// import tweens from './tweens';



const { width } = Dimensions.get("window");
const exportTo = ["google", "email"]
//const ref = new DataController;

export default class EditViewController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //anmiations stuff
      // tweenHandlerOn: false, animation stuff to make different animations (requires extra file)
      // tweenDuration: 350, animation to make different animations (requires extra file)
      // tweenEasing: 'linear', animation stuff to make different animations (requires extra file)
      drawerType: 'overlay',
      openDrawerOffset: (width / 2) + (width / 6),
      closedDrawerOffset:0,
      relativeDrag: false,
      panThreshold: .15,
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: true,
      side: "left",

      data: [],
      presets:[],


    };

  }
  //component is a deprecated method should update in the future
  componentWillMount(){
    this.get("Default")
    this.getAll()
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.data.length != 0 && prevState.data != this.state.data){
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

    firebase.database().ref().on("value", (data) => {
      //javascript can be really weird sometimes. Having a for loop here wont affect the performances thaqt much since theres a small amount of items
      const output = Object.keys(data.val())
      const previous = []
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


  render() {

    const mainViewControlPanel = <MainViewControlPanel
        closeDrawer={() => {
            this.drawer.close();
        }}
        goToEdit={() => {
            this.props.navigation.navigate("Edit", {
              data: this.state.data
            })


        }}
        goToSettings={() => {
            this.props.navigation.navigate("Settings")
        }}

        returnedPreset={(presetName) =>{
            this.get(presetName);
        }}
        returnedExport={(exportName) =>{
          console.log(exportName)
        }}

        exports={exportTo}
        presets={this.state.presets}
    />

    const renderer = <Renderer
      openDrawer={() => {
        this.drawer.open();
      }}
      copyToClipboard={(string) =>{
          Clipboard.setString(string);
          let description = "There is nothing to copy!"
          let message = "Error"
          if(string.length != 0){
            description = 'Copied "'+string+'" to clipboard succesfully!'
            message = "Copied"
          }
          showMessage({
            message: message,
            description:description,
            type: "info",
          });

      }}
      exportTo={this.state.exportName}
      data={this.state.data}
        enabled={true}
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
        negotiatePan={true}
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
