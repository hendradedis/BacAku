import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../modules/screen/introscreen';
import HomeScreen from '../modules/screen/home';
import MenuScreen from '../modules/screen/Menu';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Intro: undefined;
  Menu: undefined;
  route?: any;
};

const Stack = createStackNavigator<RootStackParamList>();
// const Tab = createBottomTabNavigator<RootStackParamList>();

// create for navigation home
// const MainApp = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={'Market'}
//       screenOptions={({route}: any) => ({
//         tabBarIcon: ({size}) => {
//           let IconName: string;
//           if (route?.name === 'Home') {
//             IconName = 'home';
//           } else if (route?.name === 'Account') {
//             IconName = 'user';
//           } else if (route?.name === 'Market') {
//             IconName = 'barschart';
//           } else if (route?.name === 'Disscovery') {
//             IconName = 'folderopen';
//           } else if (route?.name === 'Wallet') {
//             IconName = 'wallet';
//           }
//           return <AntDesign name={IconName} size={size} />;
//         },
//         headerShown: false,
//         tabBarOptions: {
//           activeTintColor: 'red',
//           inactiveTintColor: '#fff',
//         },
//       })}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Disscovery" component={DisscoveryScreen} />
//       <Tab.Screen name="Market" component={MarketScreen} />
//       <Tab.Screen name="Wallet" component={WalletScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// };

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
      {/* <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default RootNavigation;
