import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const { logout, user } = useUser();
  const logoutMessage = function () {
    console.log("LoggedOut");
  };
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        {user?.email || "Not Logged In"}
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start some Sessions...</ThemedText>
      <Spacer />

      <ThemedButton onPress={logout}>
        <ThemedText style={{ color: "#f2f2f2" }}>Logout</ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
