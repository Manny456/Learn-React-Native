import { useContext } from "react";
import { FightSessionContext } from "../contexts/fightSessionContext";

export function useFights() {
  const context = useContext(FightSessionContext);
  console.log("Hook is invoked");

  if (!context) {
    throw new Error("useFights must be used within a FightProvider");
  }

  return context;
}
