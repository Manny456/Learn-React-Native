import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";

import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { useState } from "react";
import { useFights } from "../../hooks/useFights";
import { useRouter } from "expo-router";
import Spacer from "../../components/Spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";

const Create = () => {
  const [title, setTitle] = useState("");
  const [hostName, setHost] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { createSession } = useFights();
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("Create Session Form Submitted");
    if (!title.trim() || !hostName.trim() || !description.trim()) {
      console.log("Validation failed");
      return;
    }
    console.log("Validation Completed");
    setLoading(true);

    console.log("Loading set to true");
    try {
      console.log("Now creating session");

      await createSession({
        title,
        hostName,
        description,
      });

      setTitle("");
      setDescription("");
      setHost("");
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);

      // Redirect
      router.replace("/profile");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
          Add a new Session
        </ThemedText>
        <Spacer />

        <ThemedTextInput
          style={styles.input}
          placeholder="Session Title"
          value={title}
          onChangeText={setTitle}
        />
        <Spacer />

        <ThemedTextInput
          style={styles.input}
          placeholder="Host"
          value={hostName}
          onChangeText={setHost}
        />
        <Spacer />

        <ThemedTextInput
          style={styles.multiline}
          placeholder="Session Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Spacer />
        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <ThemedText style={{ color: "#f2f2f2" }}>
            {loading ? "Saving..." : " Create Session"}
          </ThemedText>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
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
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
});
