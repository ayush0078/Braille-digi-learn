import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ReadingResult from "../components/ReadingResult";

const ReadingLettersResult = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ReadingResult text="Punkt 1 ist dargestellt und der Buchstabe ist a" />
      <TouchableOpacity
        style={styles.touchNextLetter}
        onPress={() => navigation.navigate("LearnReadingB")}
      >
        <Text style={styles.textStyle}>NÄCHSTER BRIEF</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchNextLetter}
        onPress={() => navigation.navigate("LearnReading")}
      >
        <Text style={styles.textStyle}>GEH ZURÜCK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchNextLetter}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textStyle}>HAUPTMENÜ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
  },
  touchNextLetter: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
  },
  textStyle: {
    fontSize: 32,
    fontWeight: "normal",
    color: "#E8F044",
  },
});

export default ReadingLettersResult;
