import { View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";
import { StyleSheet } from "react-native";

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
export default ThemedCard;
