import React from "react";
import { ScrollView, View } from "react-native";
import Second1 from "../components/Secondpage/Second1";
import Second2 from "../components/Secondpage/Second2";
import Second3 from "../components/Secondpage/Second3";
import Second4 from "../components/Secondpage/Second4";
import Section5 from "../components/Section5";

export default function Secondpage() {
    return (
        <ScrollView>
            <View style={{backgroundColor : 'lightyellow'}}>
                <Second1 />
                <Second2 />
                <Second3 />
                <Second4 />
            </View>
        </ScrollView>
    );
}