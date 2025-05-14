import { StyleSheet } from "react-native";

import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { useState } from "react";
import { useFights } from "../../hooks/useFights";
import { useRouter } from "expo-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setHost] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { createSession } = useFights();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Add a new Session
      </ThemedText>
    </ThemedView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
