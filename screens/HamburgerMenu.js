import React, {PureComponent} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import MainView from './MainView';


const { width } = Dimensions.get("window");
//const { items } = this.props; this is gonna be used to pass custoim componennts in the drawer menu
const hamburger = <Icon name="menuunfold" size={40}  />;
class HamburgerMenu extends React.Component {
  render(){
      return (
        <BurgerMenu/>
     );
   }
}
const CustomDrawerComponent = (props) => (
  <SafeAreaView>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)
const BurgerMenu = createDrawerNavigator ({
  Keyboard: MainView,
},{
  contentComponent: CustomDrawerComponent
})
const AppContainer = createAppContainer(BurgerMenu);
export default AppContainer;
