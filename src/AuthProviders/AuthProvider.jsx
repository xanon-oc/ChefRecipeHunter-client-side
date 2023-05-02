import React, { createContext, useEffect } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(true);

  // login with google

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // login with github

  const gprovider = new GithubAuthProvider();
  const handleGitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gprovider);
  };

  // create user with email password

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email password

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // sign out

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    setPic,
    pic,
    user,
    setUser,
    handleGoogleSignIn,
    handleGitHubSignIn,
    logOut,
    loading,
    createUser,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
