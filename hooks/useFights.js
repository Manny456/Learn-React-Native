import { useContext } from "react";
import { FightSessionContext } from "../contexts/fightSessionContext";

export function useFights() {
  const context = useContext(FightSessionContext);

  if (!context) {
    throw new Error("useFights must be used within a FightProvider");
  }

  return context;
}
