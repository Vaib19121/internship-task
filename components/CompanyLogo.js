import { View, Image, StyleSheet,Dimensions } from "react-native";
import React from "react";

export default function CompanyLogo() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "90%",
    alignSelf: "center",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: "white",
    transform: [{scaleX:1.14} ],
    overflow: "hidden",
  },
  img: {
    height: 60,
    width: 100,
    marginHorizontal: 110,
    transform: [{scaleX:0.9} ],
    marginTop: 30,
    borderColor:'black',
    marginLeft: Dimensions.get('window').width/2 - 60,
    marginBottom: 15,
  },
  
});
