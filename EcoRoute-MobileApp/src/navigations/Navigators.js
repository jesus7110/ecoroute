import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login'

import { Image, ImageBackground } from 'react-native';
import Search from '../screens/Search';




const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Plan" component={Search} />
      
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
