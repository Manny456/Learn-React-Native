import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { Colors } from "../constants/Colors";
const About = () => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>About</Text>
      <Link style={styles.linkStyle} href="/">
        HomePage
      </Link>
      <Link style={styles.linkStyle} href="/contact">
        Contact us Here
      </Link>
    </View>
  );
};

export default About;

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
    // backgroundColor: "#eee",
    borderWidth: 5,
    padding: 20,
    margin: 10,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    borderColor: "#ccc",
  },
  linkStyle: {
    color: "#7A007A",
    borderBottomWidth: 1,
  },
});
