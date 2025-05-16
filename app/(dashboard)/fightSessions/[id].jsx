import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFights } from "../../../hooks/useFights";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedCard from "../../../components/ThemedCard";
import Spacer from "../../../components/Spacer";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from "../../../constants/Colors";

const FightDetails = () => {
  const { id } = useLocalSearchParams();
  const [fightSession, setFightSession] = useState(null);
  const { fetchSessionById, deleteSession } = useFights();
  const router = useRouter();
  handleDelete = async () => {
    await deleteSession(id);
    setFightSession(null);
    console.log("Session deleted");
    router.replace("/fightSessions");
  };

  useEffect(() => {
    async function loadBook() {
      const fightSessionData = await fetchSessionById(id);
      setFightSession(fightSessionData);
      console.log("FightSessionData:", fightSessionData);
    }

    loadBook();
  }, [id]);

  if (!fightSession) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{fightSession.title}</ThemedText>
        <ThemedText style={styles.title}>
          Hosted by: {fightSession.hostName}
        </ThemedText>
        <ThemedText title={true}>Book Description:</ThemedText>
        <Spacer />

        <ThemedText>{fightSession.description}</ThemedText>
      </ThemedCard>
      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <ThemedText style={{ color: "#fff", textAlign: "center" }}>
          Delete Session
        </ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default FightDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
  delete: {
    marginTop: 20,
    backgroundColor: Colors.warning,
    alignSelf: "center",
    width: 200,
  },
});
