/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Navigator';
import {name as appName} from './app.json';
import * as firebase from 'firebase';

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
if (!firebase.apps.length) {
   firebase.initializeApp(config);
}
//removes all warnings
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
