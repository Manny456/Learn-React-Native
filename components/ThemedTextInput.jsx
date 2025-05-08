import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({});
