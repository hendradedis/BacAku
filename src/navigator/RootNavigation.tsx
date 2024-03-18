import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../modules/screen/introscreen';
import HomeScreen from '../modules/screen/home';
import MenuScreen from '../modules/screen/Menu';
import DetailScreen from '../modules/screen/detailbuku';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Intro: undefined;
  Menu: undefined;
  Detail: undefined;
  route?: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
