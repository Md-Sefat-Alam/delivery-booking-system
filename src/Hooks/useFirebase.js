import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/Firebase.Init";

firebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.code);
        console.log(error.code);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.code);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser({});
      }
    });
  }, []);

  return {
    user,
    error,
    googleLogin,
    logOut,
  };
};
export default useFirebase;
