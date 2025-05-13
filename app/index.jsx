import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import pizza1 from "../assets/img/pizza1.png";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedCard from "../components/ThemedCard";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Home</ThemedText>
      <ThemedText style={styles.title}>Hallo Hallo</ThemedText>

      <ThemedCard>
        <Text style={styles.myCard}>This is a card</Text>
      </ThemedCard>

      <Spacer height={10}></Spacer>

      <ThemedText title={true}>Trying out Themed Text</ThemedText>

      <Spacer height={10}></Spacer>

      <ThemedLogo style={styles.imageDimensions} />

      <Spacer height={10}></Spacer>

      <Link style={styles.linkStyle} href="/Register">
        <ThemedText>Register</ThemedText>
      </Link>
      <Link style={styles.linkStyle} href="/Login">
        <ThemedText>Login</ThemedText>
      </Link>
      <Link style={styles.linkStyle} href="/profile">
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

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
