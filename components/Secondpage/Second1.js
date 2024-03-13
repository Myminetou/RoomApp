import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome5, Feather} from "@expo/vector-icons";


export default function Second1() {
    return (
        <View>
            <Image style={{ width: 700, height: 200}} source={require("../../assets/garden.jpg")} />
            <Text style = {{padding:20, fontSize:35,marginTop:-90, color:"white", textAlign: "center"}}>Activities</Text>
            <Feather style={{marginTop:-80,padding:10, marginLeft:150}} name="activity" size={30} color="white" />
        </View>
    );
}