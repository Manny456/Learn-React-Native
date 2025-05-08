import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";

const ThemedButton = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
