import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <View style={styles.container}>
      <ThemedText>Contact us Here</ThemedText>
      <ThemedText>Number 0763376373</ThemedText>
      <ThemedText>testEmail@gmail.com</ThemedText>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  myCard: {
    backgroundColor: "#eee",
    borderWidth: 5,
    padding: 20,
    margin: 10,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    borderColor: "#ccc",
  },
  imageDimensions: {
    height: 20,
    width: 20,
  },
  linkStyle: {
    color: "#7A007A",
    borderBottomWidth: 1,
  },
});
