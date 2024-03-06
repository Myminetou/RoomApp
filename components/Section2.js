import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
    return (
        <View style={{marginTop: 10,padding: 5,borderRadius: 20,borderWidth : 1,backgroundColor : 'white',borderColor: 'gray',}}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="search" size={20} color="gray" />
                        <Text style={{ fontSize: 15, marginLeft: 10}}>Search</Text>
                    </View>
        </View>
    );
}
    