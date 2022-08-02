import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OnBoarding from '../screens/OnBoarding';
import SplashScreen from '../screens/SplashScreen';
import SignUpSignIn from '../screens/SignUpSignIn';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="SplashScreen" component={SplashScreen} />
//         <Drawer.Screen name="OnBoarding" component={OnBoarding} />

//       </Drawer.Navigator>
//     );
//   }

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignUpSignIn" component={SignUpSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
