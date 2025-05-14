import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

const Useronly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/Login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }
  return children;
};

export default Useronly;
