import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Useronly from "../../components/auth/UserOnly";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Useronly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90,
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  size={24}
                  name={focused ? "person-circle" : "person-circle-outline"}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="fightSessions"
          options={{
            title: "Sessions",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  size={24}
                  name={focused ? "barbell" : "barbell-outline"}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  size={24}
                  name={focused ? "add-circle" : "add-circle-outline"}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              );
            },
          }}
        />
      </Tabs>
    </Useronly>
  );
};

export default DashboardLayout;
