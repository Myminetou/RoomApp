import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Firstpage from './screens/Firstpage';
import Secondpage from './screens/Secondpage';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigations/RootStack';
import BottomTab from './navigations/BottomTab';


export default function App() {
  return (
    //<Firstpage />
    // <Secondpage />
  <NavigationContainer>
    <RootStack /> 
    {/* <BottomTab/> */}
  </NavigationContainer>
  );
}
