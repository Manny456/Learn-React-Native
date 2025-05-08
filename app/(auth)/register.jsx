import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import { Link } from "expo-router";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const register = () => {
  const handleSubmit = function () {
    console.log("Register Form Submitted");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Register for an account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register Here</Text>
      </ThemedButton>

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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
});
