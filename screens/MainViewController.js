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
import EditViewControlPanel from './MainViewControlPanel'


// import tweens from './tweens';

const { width } = Dimensions.get("window");

export default class EditViewController extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset: (width / 2) + (width / 6),
      closedDrawerOffset:0,
      relativeDrag: false,
      panThreshold: .25,
      // tweenHandlerOn: false, animation stuff to make different animations (requires extra file)
      // tweenDuration: 350, animation to make different animations (requires extra file)
      // tweenEasing: 'linear', animation stuff to make different animations (requires extra file)
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      side: "left",
    };
  }


  //animation handler to make different animations (requires extra file)
  // tweenHandler(ratio){
  //   if(!this.state.tweenHandlerPreset){ return {} }
  //   return tweens[this.state.tweenHandlerPreset](ratio)
  // }

  //useless shit
  // noopChange(){
  //   this.setState({
  //     changeVal: Math.random()
  //   })
  // }

  // openDrawer(){
  //   this.drawer.open()
  // }

  //no clue wtf this is
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
