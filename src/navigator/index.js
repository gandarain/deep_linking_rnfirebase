import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import NotificationsScreen from '../screen/NotificationScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SettingsScreen from '../screen/SettingsScreen';
import LinkingButtonScreen from '../screen/LinkingButtonScreen';
import linking from './linking';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="LinkingButton" component={LinkingButtonScreen} />
  </Stack.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
