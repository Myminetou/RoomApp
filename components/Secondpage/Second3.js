import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Second2(props) {
    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/Myminetou/RoomApp/main/Calender4.json');
            let data = await promise.json();
            //console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineTours();
    }, []);    
    return (
        <View style={props.style}>
            <Text style={{ fontSize : 15, color:"grey", margin:30 }}>Open Chat กลุ่มสาธารณะ</Text>
            <FlatList
                horizontal={true}
                // data={tours}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                       console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10, borderWidth:1, borderRadius:10, marginLeft:20}}>
                                <Image style={{ width: 150, height :200, borderRadius:10 }} source={{ uri : item.uri}} />
                                <View style={{ flexDirection:'column', marginTop: -30, paddingHorizontal:10, width:150, height :80, backgroundColor:"lightyellow", borderBottomLeftRadius: 10, borderBottomRightRadius:10}}>
                                    <View>
                                        <Text style={{fontSize:14, color : "black", padding:10}}>{item.group}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize:12, color : "black", marginLeft:10}}>{item.member}</Text>
                                    </View>
                                </View>
                            </View>
                            // <TourItem item={item} index={index} />
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}


