import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";

export default function AuthLauout() {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
        }}
      ></Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <StatusBar style="auto" />
    </>
  );
}
