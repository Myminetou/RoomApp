import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, AntDesign, Entypo, Fontisto, FontAwesome, FontAwesome6,Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Other() {
    const navigation = useNavigation();
    return (
        <View>
            <View>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", padding: 10}}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../../assets/firstpage.jpg")} />
                    <View style={{ paddingLeft: 10, flexDirection:"row"}}>
                        <Text style={{ fontSize: 20 ,marginLeft:10}}>Minmine</Text>
                        <Entypo style={{marginTop: 10, marginLeft:15}} name="pencil" size={30} color="black" onPress={ ()=>{ navigation.navigate("Profile") }} />
                    </View>
                </View>
                <View style={{flexDirection:"row", padding:20}}>
                    <TouchableOpacity>
                        <FontAwesome style={{marginTop: 10, marginLeft:27}} name="plus" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:10}}>Add Group</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome6 style={{marginTop: 10, marginLeft:50}} name="list-check" size={40} color="black" onPress={ ()=>{ navigation.navigate("TodoList") }}/>
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:40}}>To do list</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign style={{marginTop: 10, marginLeft:50}} name="addfile" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:60}}>File</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons style={{marginTop: 10, marginLeft:50}} name="scan" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:55}}>Scan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign style={{marginTop: 10, marginLeft:50}} name="google" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:55}}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", padding:20}}>
                    <TouchableOpacity>
                        <Fontisto style={{marginTop: 10, marginLeft:27}} name="line" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:30}}>Line</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome style={{marginTop: 10, marginLeft:60}} name="facebook-square" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:40}}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign style={{marginTop: 10, marginLeft:55}} name="instagram" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:50}}>Instagram</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign style={{marginTop: 10, marginLeft:30}} name="twitter" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:30}}>Twitter</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                        <AntDesign style={{marginTop: 10, marginLeft:50}} name="setting" size={40} color="black" />
                        <Text style={{flexDirection:"column", marginTop: 10, marginLeft:50}}>Setting</Text>
                    </TouchableOpacity>  
                </View>
            </TouchableOpacity>
            </View>

        </View>
        );
    }