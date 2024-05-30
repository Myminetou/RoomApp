import React from "react";
import { Image, Text, View } from "react-native";
import { MaterialCommunityIcons, AntDesign, Entypo, Fontisto, FontAwesome, FontAwesome6 } from "@expo/vector-icons";

export default function Recommend() {
    return (
        <View>
            <Text style={{ fontSize : 20, color:"black", margin:30, marginTop:20}}>Recommend People</Text>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"column", width:150, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white'}}>
                        <Image style={{ width: 100, height: 80, borderRadius: 10, shadowColor: "black", marginTop:10}} source={require("../../assets/cat2.jpg")} />
                        <View style={{justifyContent:"column", padding:10}}>
                            <Text style={{ fontSize:20}}>Name</Text>
                            <View style ={{flexDirection:"column"}}>
                                <Text style={{ fontSize:15}}>DSI06</Text>
                                <View style={{flexDirection:"row"}}>
                                    <Entypo style={{marginTop: 10}} name="chat" size={30} color="black" />
                                    <AntDesign style={{marginTop: 10, marginLeft:30}} name="adduser" size={30} color="black" />
                                </View>
                            </View>
                        </View>
                        
                </View>
                <View style={{flexDirection:"column", width:150, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white'}}>
                        <Image style={{ width: 100, height: 80, borderRadius: 10, shadowColor: "black", marginTop:10}} source={require("../../assets/cat3.jpg")} />
                        <View style={{justifyContent:"column", padding:10}}>
                            <Text style={{ fontSize:20}}>Name</Text>
                            <View style ={{flexDirection:"column"}}>
                                <Text style={{ fontSize:15}}>DSI06</Text>
                                <View style={{flexDirection:"row"}}>
                                    <Entypo style={{marginTop: 10}} name="chat" size={30} color="black" />
                                    <AntDesign style={{marginTop: 10, marginLeft:30}} name="adduser" size={30} color="black" />
                                </View>
                            </View>
                        </View>
                        
                </View>
                <View style={{flexDirection:"column", width:150, marginHorizontal: 10, padding: 20, borderRadius: 20, borderWidth : 1, backgroundColor : 'white'}}>
                        <Image style={{ width: 100, height: 80, borderRadius: 10, shadowColor: "black", marginTop:10}} source={require("../../assets/cat4.jpg")} />
                        <View style={{justifyContent:"column", padding:10}}>
                            <Text style={{ fontSize:20}}>Name</Text>
                            <View style ={{flexDirection:"column"}}>
                                <Text style={{ fontSize:15}}>DSI06</Text>
                                <View style={{flexDirection:"row"}}>
                                    <Entypo style={{marginTop: 10}} name="chat" size={30} color="black" />
                                    <AntDesign style={{marginTop: 10, marginLeft:30}} name="adduser" size={30} color="black" />
                                </View>
                            </View>
                        </View>
                        
                </View>
            </View>
        </View>
    );
}