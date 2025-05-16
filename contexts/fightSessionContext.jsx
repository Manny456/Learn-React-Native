import { createContext, useEffect, useState } from "react";

import { databases, client } from "../lib/appwrite";
import { ID, Query } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import { DATABASE_ID, COLLECTION_ID } from "../lib/appwrite";

export const FightSessionContext = createContext();

export function FightProvider({ children }) {
  const [fightSession, setFightSession] = useState([]);
  const { user } = useUser();

  async function fetchSessions() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );
      setFightSession(response.documents);
      console.log("Fetched sessions:", response.documents);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchSessionById(id) {
    console.log("FETCH SESSION BY ID FUNCTION CALLED");
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );

      return response;
    } catch (err) {
      console.log(err);
    }
  }

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

  async function deleteSession(id) {
    try {
      const response = await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
      console.log("Deleted session:", response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

    if (user) {
      fetchSessions();

      unsubscribe = client.subscribe(channel, (response) => {
        const { events, payload } = response;

        if (events[0].includes("create")) {
          setFightSession((initialSessions) => [...initialSessions, payload]);
          console.log("New session created and added to Sessions");
        }

        if (events[0].includes("delete")) {
          setFightSession((initialSessions) => {
            return initialSessions.filter(
              (session) => session.$id !== payload.$id
            );
          });

          console.log("New session created and added to Sessions");
        }
      });
    } else {
      setFightSession([]);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
        console.log("Unsubscribed from channel");
      }
    };
  }, [user]);

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
