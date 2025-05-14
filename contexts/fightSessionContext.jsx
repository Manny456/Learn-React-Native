import { createContext } from "react";

import {
  COLLECTION_ID,
  DATABASE_ID,
  OLLECTION_ID,
  databases,
} from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const FightSessionContext = createContext();

export function FightProvider({ children }) {
  const [fightSession, setFightSession] = useState([]);
  const { user } = useUser();

  async function fetchSessions() {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchSessionById(id) {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async function createSession(data) {
    try {
      const newSession = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role(user.$id)),
          Permission.update(Role(user.$id)),
          Permission.delete(Role(user.$id)),
        ]
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteSession() {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FightSessionContext.Provider
      value={{ fetchSessions, fetchSessionById, deleteSession, createSession }}
    >
      {children}
    </FightSessionContext.Provider>
  );
}
