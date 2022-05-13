import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CustomText(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: props.size,
          color: "#ffe0bc",
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 25,
    justifyContent: "center",
  },
  
});
