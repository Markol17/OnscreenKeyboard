
import {createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import EditScreen from './screens/EditViewController';
import MainView from './screens/MainViewController';
import SettingsView from './screens/SettingsView';
// import { useScreens } from 'react-native-screens';
// useScreens();
const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainView,
    navigationOptions: {
      header: null,
    }
  },

  Edit:{
    screen: EditScreen,
    navigationOptions: {
      header: null,
    }
  },

    Setting:{
      screen: SettingsView,
      navigationOptions: {
        header: null,
      }
    },
})
export default createAppContainer(AppStackNavigator);
