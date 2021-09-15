import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NumersFrom1to6 from "../components/NumersFrom1to6";

const LearnReadingLetters = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NumersFrom1to6 touchtitle="1, dargestellt" />
      <NumersFrom1to6 touchtitle="2" />
      <NumersFrom1to6 touchtitle="3" />
      <NumersFrom1to6 touchtitle="4, dargestellt" />
      <NumersFrom1to6 touchtitle="5, dargestellt" />
      <NumersFrom1to6 touchtitle="6" />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("ReadingResultD")}
      >
        <Text style={styles.nextText}>NÄCHSTE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  nextButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  nextText: {
    fontSize: 32,
    color: "#E8F044",
  },
});

export default LearnReadingLetters;
