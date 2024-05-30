import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Secondpage from '../screens/Secondpage';
import Fisrtpage from '../screens/Firstpage';
import Fivepage from '../screens/Fivepage';
import TodoList from '../screens/TodoList';
import Profile from '../screens/Profile';
import Fourpage from '../screens/Fourpage';
import Thirdpage from '../screens/Thirdpage';

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
            options={{ title: "Chat"}}
          />      
          <Stack.Screen
            name="Thirdpage"
            component={Thirdpage}
            options={{ title: "Friend"}}
          />      
          <Stack.Screen
            name="Fourpage"
            component={Fourpage}
            options={{ title: "Notification"}}
          />      
          <Stack.Screen
            name="Fivepage"
            component={Fivepage}
            options={{ title: "More"}}
          />      
          <Stack.Screen
            name="TodoList"
            component={TodoList}
            options={{ title: "TodoList"}}
          />      
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile"}}
          />  
        </Stack.Navigator>
    );    
}