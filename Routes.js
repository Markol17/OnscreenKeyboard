import React from 'react';
import 'react-native-gesture-handler';
import EditScreen from './screens/EditViewController';
import MainView from './screens/MainViewController';
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
          <Stack.Screen name="MainView" component={MainView} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
          <Stack.Screen name="SettingsView" component={SettingsView} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppStatesContextManager>
  );
}
export default Routes;
