import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/userContext";
import { FightProvider } from "../contexts/fightSessionContext";

const RootLayout = () => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;
  console.log(colorSceheme);

  return (
    <UserProvider>
      <FightProvider>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.navBackground,
            },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="about" options={{ title: "About" }} />
          <Stack.Screen name="contact" options={{ title: "Contact" }} />
        </Stack>
      </FightProvider>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
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
  linkStyle: {
    color: "#7A007A",
    borderBottomWidth: 1,
  },
  bottomFooter: {
    flex: 1,
  },
});
