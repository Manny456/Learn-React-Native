import { FlatList, Pressable, StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { useFights } from "../../hooks/useFights";
import ThemedCard from "../../components/ThemedCard";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

const FighterSessions = () => {
  const { fightSession } = useFights();
  const router = useRouter();

  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Fighting Sessions
      </ThemedText>
      <Spacer />

      <FlatList
        data={fightSession}
        keyExtractor={(item) => {
          return item.$id;
        }}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                router.push(`/fightSessions/${item.$id}`);
              }}
            >
              <ThemedCard style={styles.card}>
                <ThemedText>{item.title}</ThemedText>
                <ThemedText>Written By {item.hostName}</ThemedText>
              </ThemedCard>
            </Pressable>
          );
        }}
      />
    </ThemedView>
  );
};

export default FighterSessions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    marginTop: 40,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
