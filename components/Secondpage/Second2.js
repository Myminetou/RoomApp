import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Second2(props) {
    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/Myminetou/RoomApp/main/Calender3.json');
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
            <Text style={{ fontSize : 15, color:"black", margin:30, marginTop:50}}>Activities กิจกรรมที่กำลังจะเกิดขึ้น</Text>
            <FlatList
                horizontal={true}
                // data={tours}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                       console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10, borderWidth:1, borderRadius:10, marginLeft:20}}>
                                <Image style={{ width: 300, height :250, borderRadius:10 }} source={{ uri : item.uri}} />
                                <View style={{ flexDirection:'row', marginTop: -30, paddingHorizontal:10, width:300, height :80, backgroundColor:"lightyellow", borderBottomLeftRadius: 10, borderBottomRightRadius:10}}>
                                    <View style={{padding:10, alignItems:"center"}}>
                                        <Text style={{fontSize:16, color : "red"}}>{item.month}</Text>
                                        <Text style={{fontSize:11, color : "grey"}}>{item.date}</Text>
                                    </View>
                                    <View style={{padding:10, paddingLeft:10}}>
                                        <Text style={{ fontSize:16, color : "black"}}>{item.title}</Text>
                                        <Text style={{ fontSize:12, color : "grey"}}>{item.datetime}</Text>
                                        <Text style={{ fontSize:12, color : "grey"}}>{item.place}</Text>
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


