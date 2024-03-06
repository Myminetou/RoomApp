import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Section3() {
    return (
        <View style ={{flexDirection:"row",marginTop :25,marginLeft: 10}}>
            <AntDesign name="down" size={20} color="gray" />
            <View style={{marginLeft:15}}>
                <Text style={{ fontSize: 15}}>Room</Text>
            </View>
        </View>
        );
    }