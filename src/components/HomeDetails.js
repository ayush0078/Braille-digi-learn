import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";

const HomeDetails = ({ navigation, touchtitle, nav }) => {
  const speak = () => {
    const thingToSay = `${touchtitle}`;
    Speech.speak(thingToSay);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(`${nav}`)}
    >
      <View>
        <Text style={styles.textStyle}>{touchtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 32,
    fontWeight: "600",
    color: "#E8F044",
  },
});

export default HomeDetails;
