import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact us Here</Text>
      <Text>Number 0763376373</Text>
      <Text>testEmail@gmail.com</Text>
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
