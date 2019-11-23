import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Button from '../components/OpenCloseButton';

const menuOpen = <Icon name="menu" size={40}  />;
export default class MainView extends React.Component {

  render() {

    return (
    <View>
      <Button
      onPress={() => {
        this.props.openDrawer();
      }}
        icon="open"
      />

    <Text>Main view</Text>
    </View>
    );
  }
};
