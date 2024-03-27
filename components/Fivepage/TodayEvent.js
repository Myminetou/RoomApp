import React from "react";
import { Image, Text, View } from "react-native";

export default function TodayEvent() {
    return (
        <View>
            <Text style={{ fontSize : 15, color:"black", margin:30, marginTop:50}}>What do you need to do? สิ่งที่คุณต้องทำ</Text>
            <Text style={{ fontSize : 15, color:"black", marginLeft:30}}>Today</Text>
            <View style={{flexDirection:"row", marginTop: 20, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white',borderColor: 'gray', shadowColor:"#black", elevation:10}}>
                    <Image style={{ width: 80, height: 80, borderRadius: 10, shadowColor: "black"}} source={require("../../assets/cat1.jpg")} />
                    <View style={{justifyContent:"column", padding:10}}>
                        <Text style={{ fontSize:20}}>To do list</Text>
                        <View style ={{flexDirection:"column"}}>
                            <Text style={{ fontSize:15}}>ส่งงาน TU 155</Text>
                            <Text style={{ fontSize:15}}>ส่งงาน React Native</Text>
                        </View>
                    </View>
            </View>
        </View>
    );
}