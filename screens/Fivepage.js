import React from "react";
import { ScrollView, View } from "react-native";
import Other from "../components/Fivepage/Other";
import Section5 from "../components/Section5";
import Event from "../components/Fivepage/Event"
import TodayEvent from "../components/Fivepage/TodayEvent";
import Recommend from "../components/Fivepage/Recommend"


export default function Fisrtpage() {
    return (
        <ScrollView>
            <View style={{ flex: 1 , backgroundColor : 'lightyellow', padding : 10 }}>
                <Other />
                <TodayEvent />
                <Event />
                <Recommend />
            </View>
        </ScrollView>
    );
}
