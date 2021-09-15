import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ReadingResult = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 50,
    fontWeight: "normal",
    textAlign: "center",
    color: "#E8F044",
  },
});

export default ReadingResult;
