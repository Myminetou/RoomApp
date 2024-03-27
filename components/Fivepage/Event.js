import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Event(props) {
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
            <Text style={{ fontSize : 15, color:"black", margin:30, marginTop:50}}>Another Day</Text>
            <FlatList
                horizontal={true}
                // data={tours}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                       console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10, borderWidth:1, borderRadius:10, marginLeft:20}}>
                                <Text style={{width: 100, height :50, marginLeft:100}}>To do list</Text>
                                <View style={{ flexDirection:'column', marginTop: -30, paddingHorizontal:10, width:300, height :80, backgroundColor:"lightyellow", borderBottomLeftRadius: 10, borderBottomRightRadius:10, padding:20}}>
                                    <Text>Homework</Text>
                                    <Text>Homework</Text>
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


