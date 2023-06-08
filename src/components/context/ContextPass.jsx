import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import app from '../firebaseconfig/FirebaseSDK';

export const UserContext = createContext();

const ContextPass = ({ children }) => {
  const [user, setUser] = useState();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // create new user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user when user sign in
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //sign in with email and password
  const logInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out user
  const SignoutUser = () => {
    return signOut(auth);
  };

  //google sign in
  const GoogleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github sign in
  const GithubSignin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //user state manage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const pass = {
    user,
    setUser,
    createUser,
    updateUser,
    logInWithEmailPass,
    SignoutUser,
    GoogleSignin,
    GithubSignin,
  };

  return <UserContext.Provider value={pass}>{children}</UserContext.Provider>;
};

export default ContextPass;
