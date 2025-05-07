import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import pizza1 from "../assets/img/pizza1.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text style={styles.title}>Hallo Hallo</Text>

      <View>
        <Text style={styles.myCard}>This is a card</Text>
      </View>
      <Image source={pizza1} style={styles.imageDimensions} />
      <Link style={styles.linkStyle} href="/about">
        About Page
      </Link>
      <Link style={styles.linkStyle} href="/contact">
        Contact us Here
      </Link>
    </View>
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
