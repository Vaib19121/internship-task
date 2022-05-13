import { View, Text, StyleSheet, TextInput } from "react-native";
import React,{useState,useEffect} from "react";
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomInput(props) {
  const [value , setValue] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={{flexDirection:"row"}} >
        <MaterialIcons name={props.icon} size={30} color="white" style={{zIndex:2,position:'absolute',padding:6}}/>
        <TextInput style={styles.input} value={value} onChange={(value)=> setValue(value)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "80%",
    marginLeft: 40,
    margin:10
  },
  text: {
    fontSize: 23,
    color: "#ffe0bc",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  input: {
    width: "100%",
    height: 40,
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Roboto",
    backgroundColor: "#ffe0bc",
    borderRadius: 10,
    flex:1,
    paddingLeft:40,
    opacity: 0.4,
  },
});
