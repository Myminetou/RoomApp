import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome5, Feather} from "@expo/vector-icons";


export default function Second1() {
    return (
        <View>
            <Image style={{ width: 700, height: 200}} source={require("../../assets/garden.jpg")} />
            <Text style = {{padding:20, fontSize:35,marginTop:-90, color:"white", textAlign: "center"}}>Home</Text>
        </View>
    );
}