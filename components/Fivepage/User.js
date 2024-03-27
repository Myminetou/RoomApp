import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";
import UserStorage from "../../storages/UserStorage";
import AgeStorage from "../../storages/AgeStorage";

export default function User() {
  const [user, setUser] = useState(0);
  const [age, setAge] = useState(0);

  const load = async()=>{
    console.log("load");
    let h = await UserStorage.readItem();
    setUser(h);
    let a = await AgeStorage.readItem();
    setAge(a);

    console.log(h,a);
  };

  useEffect(()=>{ load(); },[]);

  const save = async()=>{    
    console.log("save");
    UserStorage.writeItem(user);
    AgeStorage.writeItem(age);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <View style={{ flexDirection: "row"}}>
          <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../../assets/firstpage.jpg")} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setUser(parseInt(text))}
          value={user.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ID:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setAge(parseInt(text))}
          value={age.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Quote:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setAge(parseInt(text))}
          value={age.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setAge(parseInt(text))}
          value={age.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Birthday:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setAge(parseInt(text))}
          value={age.toString()}
        />
      </View>

        <Button title="Save" onPress={ save } style={styles.button} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    flex: 1,
  },
  displayContainer: {
    marginTop: 20,
  },
  displayText: {
    fontSize: 18,
    marginBottom: 5,
  },
});