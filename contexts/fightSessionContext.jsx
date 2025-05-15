import { createContext, useState } from "react";

import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const FightSessionContext = createContext();

const DATABASE_ID = "682469fc0022040f901a";
const COLLECTION_ID = "68246a20003bf875bb2a";

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

  //   async function createSession(data) {
  //     console.log("Create session called");
  //     try {
  //       console.log("Making a whole new session");
  //       const newSession = await databases.createDocument(
  //         DATABASE_ID,
  //         COLLECTION_ID,
  //         ID.unique(),
  //         { ...data, userId: user.$id },
  //         [
  //           Permission.read(Role(user.$id)),
  //           Permission.update(Role(user.$id)),
  //           Permission.delete(Role(user.$id)),
  //         ]
  //       );
  //       console.log("New session created:", newSession);

  //       return newSession;
  //     } catch (err) {
  //       console.log("Error creating session");
  //       throw err;
  //     }
  //   }

  const createSession = async (formData) => {
    console.log("CREATE SESSION FUNCTION CALLED");

    try {
      const res = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          title: formData.title,
          hostName: formData.hostName,
          description: formData.description,
          userId: user.$id,
        }
      );
      console.log("Created session:", res);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  async function deleteSession() {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FightSessionContext.Provider
      value={{
        fightSession,
        fetchSessions,
        fetchSessionById,
        deleteSession,
        createSession,
      }}
    >
      {children}
    </FightSessionContext.Provider>
  );
}
