import React from "react";
import {Text, View } from "react-native";

export default function TextNoti() {
    return (
        <View style = {{ flex: 1 , alignItems:"center"}}>
           <Text style ={{fontSize:25}}>No notification yet</Text>
        </View>
    );
}