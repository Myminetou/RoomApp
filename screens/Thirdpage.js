import React from "react";
import { ScrollView, View } from "react-native";
import Findfrind from '../components/Thirdpage/Findfriend'

export default function Thirdpage() {
    return (
        <ScrollView>
            <View style={{ flex: 1 , backgroundColor : 'lightyellow', padding : 10 }}>
                <Findfrind />
            </View>
        </ScrollView>
    );
}
