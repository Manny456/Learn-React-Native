import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import { Link } from "expo-router";
import ThemedText from "../../components/ThemedText";

const register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Register for an account
      </ThemedText>

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>Login Instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContentL: "Center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
});
