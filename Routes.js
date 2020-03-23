import React from 'react';
import 'react-native-gesture-handler';

import EditViewController from './screens/EditViewController';
import MainViewController from './screens/MainViewController';
import SettingsView from './screens/SettingsView';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStatesContextManager from './components/context/AppStatesContextManager';

const Stack = createStackNavigator();

function Routes() {
  return (
    <AppStatesContextManager>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} initialRouteName={'MainView'}>
          <Stack.Screen name="MainView" component={MainViewController} />
          <Stack.Screen name="EditView" component={EditViewController} />
          <Stack.Screen name="SettingsView" component={SettingsView} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppStatesContextManager>
  );
}
export default Routes;
