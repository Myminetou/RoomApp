import React from "react";
import {Image, Text, View } from "react-native";
import { AntDesign, FontAwesome} from "@expo/vector-icons";

export default function Findfriend() {
    return (
        <View>
            <View style = {{flexDirection:'row'}}>
            <AntDesign style={{marginTop: 10,marginLeft:400}} name="addusergroup" size={30} color="black"/>
            <FontAwesome style={{marginTop: 10, margin:20}} name="group" size={30} color="black"/>
            </View>
            <Text style ={{fontSize:20}}> Friend (20) </Text>
            <View style ={{flexDirection:"column"}}>
                <View style ={{flexDirection:"row"}}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,margin:30}} source={require("../../assets/friend1.jpg")} />
                    <Text style={{ fontSize:15, marginTop:50}}>Sandwish</Text>
                    </View>
                <View style ={{flexDirection:"row"}}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,margin:30}} source={require("../../assets/friend2.jpg")} />
                    <Text style={{ fontSize:15, marginTop:50}}>Tea</Text>
                </View>
                <View style ={{flexDirection:"row"}}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,margin:30}} source={require("../../assets/friend3.jpg")} />
                    <Text style={{ fontSize:15, marginTop:50}}>Ham</Text>
                </View>
                <View style ={{flexDirection:"row"}}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,margin:30}} source={require("../../assets/friend4.jpg")} />
                    <Text style={{ fontSize:15, marginTop:50}}>Glass</Text>
                </View>
                <View style = {{flexDirection:"row"}}>
                        <Text style ={{fontSize:15, marginLeft:200,padding:10}}>More</Text>
                        <AntDesign style={{padding:10}} name="rightcircle" size={20} color="black"/>
                    </View>
            </View>
            <View>
                <Text style ={{fontSize:20}}>Group (5)</Text>
                <View style = {{flexDirection:"column"}}>
                    <View style ={{flexDirection:"row"}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,margin:30}} source={require("../../assets/cat1.jpg")} />
                        <View style ={{flexDirection:"column", marginTop:30}}>
                            <Text style={{ fontSize:20}}>React Native</Text>
                            <Text style={{ fontSize:15}}>Member 40 people</Text>
                    </View>
                    </View>
                    <View style ={{flexDirection:"row"}}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,margin:30}} source={require("../../assets/cat2.jpg")} />
                    <View style ={{flexDirection:"column", marginTop:30}}>
                        <Text style={{ fontSize:20}}>My Friend</Text>
                        <Text style={{ fontSize:15}}>Member 7 people</Text>
                    </View>
                    </View>
                    <View style ={{flexDirection:"row"}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,margin:30}} source={require("../../assets/cat3.jpg")} />
                        <View style ={{flexDirection:"column", marginTop:30}}>
                                <Text style={{ fontSize:20}}>DSI201</Text>
                                <Text style={{ fontSize:15}}>Member 40 people</Text>
                        </View>
                    </View>
                <View style = {{flexDirection:"row"}}>
                    <Text style ={{fontSize:15, marginLeft:200,padding:10}}>More</Text>
                    <AntDesign style={{padding:10}} name="rightcircle" size={20} color="black"/>
                </View>
              
                </View>
               
            </View>
        </View>
    );
}