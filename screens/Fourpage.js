import React from "react";
import { ScrollView, View } from "react-native";
import TextNoti from "../components/Fourpage/TextNoti";

export default function Fourpage() {
    return (
        <ScrollView>
            <View style={{backgroundColor : 'lightyellow', padding : 10 }}>
                <TextNoti />
            </View>
        </ScrollView>
    );
}
