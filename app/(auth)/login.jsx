import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import { Link } from "expo-router";
import ThemedText from "../../components/ThemedText";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";

const login = () => {
  const handleSubmit = function () {
    console.log("Register Form Submitted");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Login to your account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login From Here</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Register Instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

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
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
