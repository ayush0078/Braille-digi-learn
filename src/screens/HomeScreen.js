import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeDetails from "../components/HomeDetails";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeDetails
        touchtitle="Buchstaben lernen"
        navigation={navigation}
        nav="LearnReading"
      />
      <HomeDetails touchtitle="Buchstaben üben" />
      <HomeDetails touchtitle="Wörter lesen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

export default HomeScreen;
