import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

const NumersFrom1to6 = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.textStyle}>{props.touchtitle}</Text>
      </View>
    </TouchableOpacity>
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
    fontSize: 32,
    fontWeight: "normal",
    color: "#E8F044",
  },
});

export default NumersFrom1to6;
