import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import FIREBASE_AUTH from "./config";

const AuthManager = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });

  return user;
};

export default AuthManager;
