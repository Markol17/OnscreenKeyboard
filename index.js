/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Navigator';
import {name as appName} from './app.json';

//removes all warnings
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
