import React from "react";
import { Image, Text, View } from "react-native";

export default function Section4() {
    return (
        <View>
            <View style={{flexDirection:"row", marginTop: 20, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white',borderColor: 'gray', shadowColor:"#black", elevation:10}}>
                    <Image style={{ width: 80, height: 80, borderRadius: 10, shadowColor: "black"}} source={require("../assets/cat1.jpg")} />
                    <View style={{justifyContent:"column", padding:15}}>
                        <Text style={{ fontSize:20}}>React Native</Text>
                        <Text style={{ fontSize:15}}>Member 40 people</Text>
                    </View>
            </View>
            
            <View style={{flexDirection:"row", marginTop: 10, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white',borderColor: 'gray', shadowColor:"#black", elevation:10}}>
            <Image style={{ width: 80, height: 80, borderRadius: 10}} source={require("../assets/cat2.jpg")} />
                    <View style={{justifyContent:"column", padding:15}}>
                        <Text style={{ fontSize:20}}>My Friend</Text>
                        <Text style={{ fontSize:15}}>Member 7 people</Text>
                    </View>
            </View>

            <View style={{flexDirection:"row", marginTop: 10, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white',borderColor: 'gray', shadowColor:"#black", elevation:10}}>
            <Image style={{ width: 80, height: 80, borderRadius: 10}} source={require("../assets/cat3.jpg")} />
                    <View style={{justifyContent:"column", padding:15}}>
                        <Text style={{ fontSize:20}}>DSI201</Text>
                        <Text style={{ fontSize:15}}>Member 40 people</Text>
                    </View>
            </View>

            <View style={{flexDirection:"row", marginTop: 10, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white',borderColor: 'gray', shadowColor:"#black", elevation:10}}>
            <Image style={{ width: 80, height: 80, borderRadius: 10}} source={require("../assets/cat4.jpg")} />
                    <View style={{justifyContent:"column", padding:15}}>
                        <Text style={{ fontSize:20}}>CI200</Text>
                        <Text style={{ fontSize:15}}>Member 40 people</Text>
                    </View>
            </View>

            <View style={{flexDirection:"row", marginTop: 10, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white',borderColor: 'gray', shadowColor:"#black", elevation:10}}>
            <Image style={{ width: 80, height: 80, borderRadius: 10}} source={require("../assets/cat5.jpg")} />
                    <View style={{justifyContent:"column", padding:15}}>
                        <Text style={{ fontSize:20}}>Project</Text>
                        <Text style={{ fontSize:15}}>Member 3 people</Text>
                    </View>
            </View>
            <View style={{flexDirection:"row", marginTop: 10, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white',borderColor: 'gray', shadowColor:"#black", elevation:10}}>
            <Image style={{ width: 80, height: 80, borderRadius: 10}} source={require("../assets/cat6.jpg")} />
                    <View style={{justifyContent:"column", padding:15}}>
                        <Text style={{ fontSize:20}}>TU100</Text>
                        <Text style={{ fontSize:15}}>Member 50 people</Text>
                    </View>
            </View>
    </View>
        );
    }