import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={styles.title}>About</ThemedText>
      <Link style={styles.linkStyle} href="/">
        <ThemedText> HomePage</ThemedText>
      </Link>
      <Link style={styles.linkStyle} href="/contact">
        <ThemedText> Contact us Here </ThemedText>
      </Link>
    </ThemedView>
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
