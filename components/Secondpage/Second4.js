import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Feather} from "@expo/vector-icons";

export default function Section5() {
    return (
        <View style={{ padding:10}}>
            <View style={{marginTop: 20, borderTopWidth:1, justifyContent:"space-between", flexDirection:"row"}}>
                <View style = {{flexDirection:"column", marginLeft:8}}>
                    <View>
                        <MaterialIcons style={{marginTop: 10,marginLeft:15}} name="notifications" size={30} color="black" />
                    </View>
                    <Text>Notifications</Text>
            </View>

            <View style = {{flexDirection:"column"}}>
                <View>
                <Ionicons style={{marginTop: 10}} name="chatbox-ellipses" size={30} color="black" />
                </View>
                <Text>Chat</Text>
            </View>

            <View style = {{flexDirection:"column"}}>
                <View>
                <Ionicons style={{marginTop: 10}} name="people-sharp" size={30} color="black" />
                </View>
                <Text>Friend</Text>
            </View>

            <View style = {{flexDirection:"column"}}>
                <View>
                <Feather style={{marginTop: 10, marginLeft: 10}} name="activity" size={30} color="black" />
                </View>
                <Text>Activities</Text>
            </View>

            <View style = {{flexDirection:"column"}}>
                <View>
                <MaterialCommunityIcons style={{marginTop: 10}} name="dots-horizontal" size={30} color="black" />
                </View>
                <Text>Chat</Text>
            </View>
        </View>
        </View>
        );
    }