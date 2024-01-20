// AuthManager.js

import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import FIREBASE_AUTH from "./config";

const AuthManager = () => {
  const [user, setUser] = useState(null);

  const handleSignOut = () => {
    signOut(FIREBASE_AUTH)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Çıkış işlemi başarısız oldu", error);
      });
  };

  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });

  return { user, handleSignOut };
};

export default AuthManager;
