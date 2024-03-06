import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section1() {
    return (
        <View >
            <View style={{ flexDirection: "row", padding: 10, marginTop:30 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/firstpage.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Team</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 350,}}>
                    <FontAwesome name="bars" size={20} color="black" />
                </View>
            </View>
            
        </View>

    );
}
