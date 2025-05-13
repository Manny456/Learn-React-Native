import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedText from "../ThemedText";

const Useronly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/Login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return <ThemedText>Loading</ThemedText>;
  }
  return children;
};

export default Useronly;
