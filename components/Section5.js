import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Feather} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Second4() {
    const navigation = useNavigation();
    return (
        <View style={{ padding:10}}>
            <View style={{marginTop: 20, borderTopWidth:1, justifyContent:"space-between", flexDirection:"row"}}>
                <View style = {{flexDirection:"column"}}>
                    <TouchableOpacity>
                    <View>
                    <FontAwesome5 style={{marginTop: 10}} name="home" size={30} color="black" onPress={()=>{ navigation.navigate("Secondpage"); }} />
                    </View>
                    <Text>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:"column"}}>
                    <TouchableOpacity>
                    <View>
                    <Ionicons style={{marginTop: 10}} name="chatbox-ellipses" size={30} color="black" onPress={()=>{ navigation.navigate("Firstpage"); }}/>
                    </View>
                    <Text>Chat</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection:"column"}}>
                    <TouchableOpacity>
                    <View>
                    <Ionicons style={{marginTop: 10}} name="people-sharp" size={30} color="black" onPress={()=>{ navigation.navigate("Thirdpage"); }}/>
                    </View>
                    <Text>Friend</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection:"column"}}>
                    <TouchableOpacity>
                    <View>
                    <Ionicons style={{marginTop: 10, marginLeft:27}} name="notifications" size={30} color="black" onPress={()=>{ navigation.navigate("Fourpage"); }}/>
                    </View>
                    <Text>Notifications</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection:"column"}}>
                    <TouchableOpacity>
                    <View>
                    <MaterialCommunityIcons style={{marginTop: 10}} name="dots-horizontal" size={30} color="black" onPress={()=>{ navigation.navigate("Fivepage"); }} />
                    </View>
                    <Text>More</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </View>
        );
    }