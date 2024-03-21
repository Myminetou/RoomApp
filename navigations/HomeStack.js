import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Secondpage from '../screens/Secondpage';
import Fisrtpage from '../screens/Firstpage';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            name="Secondpage"
            component={Secondpage}
            options={{ title: "Secondpage" , headerShown : false}}
            />
          <Stack.Screen
            name="Firstpage"
            component={Fisrtpage}
            options={{ title: "Chat", headerShown : false }}
          />      
        </Stack.Navigator>
    );    
}