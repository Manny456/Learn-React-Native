import { View, Image } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";
import DarkLogo from "../assets/img/DarkLogo.png";
import LightLogo from "../assets/img/LightLogo.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const logo = theme === Colors.light ? LightLogo : DarkLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
