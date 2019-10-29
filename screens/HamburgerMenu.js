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
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import MenuDrawer from 'react-native-side-drawer'
// import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';
import MainView from './MainView';
// import SettingView from './SettingView';


const { width } = Dimensions.get("window");
//const { items } = this.props; this is gonna be used to pass custoim componennts in the drawer menu
const menuOpen = <Icon name="menuunfold" size={40}  />;
const menuClose = <Icon name="menufold" size={40}  color={"white"}/>;
export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  toggleOpen = () =>  {

  this.setState({ open: !this.state.open });
};
drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        {menuClose}
      </TouchableOpacity>
    );
  };
  render(){
      return (
        // <BurgerMenu/>
        <View style={styles.container}>
          <MenuDrawer
            open={this.state.open}
            drawerContent={this.drawerContent()}
            drawerPercentage={33}
            animationTime={250}
            overlay={true}
            opacity={1}
          >

          </MenuDrawer>
          <TouchableOpacity onPress={this.toggleOpen} style={styles.menuIcon}>
            {menuOpen}
          </TouchableOpacity>
        </View>
     );
   }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    zIndex: 1
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#4d4d4d",
    zIndex:5,
  },
  menuIcon: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})
// const CustomDrawerComponent = (props) => (
//   <SafeAreaView>
//     <ScrollView>
//       <DrawerItems {...props}/>
//     </ScrollView>
//   </SafeAreaView>
// )
// const BurgerMenu = createDrawerNavigator ({
//   Keyboard: MainView,
//   // Setting: SettingView,
// },{
//   contentComponent: CustomDrawerComponent
//
// })
// const AppContainer = createAppContainer(BurgerMenu);
// export default AppContainer;
