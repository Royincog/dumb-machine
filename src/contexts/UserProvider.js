import React, { createContext, useContext, useMemo } from "react";
import useSWR from "swr";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseconfig/auth/authconfig";

const UserContext = createContext();

// Custom fetcher function for Firebase Auth
const authStateFetcher = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Immediately unsubscribe since we only want the initial auth state
      if (user) {
        console.log("user info ", user);
        resolve({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        resolve(null);
      }
    });
  });
};

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { data: currentUser, mutate } = useSWR(
    "firebaseAuth",
    authStateFetcher,
    {
      revalidateOnFocus: true, // Adjust based on your needs
    }
  );

  // Use useMemo to memoize the context value
  const value = useMemo(() => ({ currentUser, mutate }), [currentUser, mutate]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
