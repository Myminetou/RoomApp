import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import HomeStack from "./HomeStack";
import Book from "../screens/book/Book";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="HomeStack" >
      <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
      <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
    </Stack.Navigator>
  );
}