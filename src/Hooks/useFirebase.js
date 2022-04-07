import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/Firebase.Init";

firebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDashBoard, setIsDashBoard] = useState(true);
  // const loc = useLocation();
  // console.log(loc);

  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const emailPasswordRegister = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => setIsLoading(false));
  };
  const emailPasswordLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // console.log(error);
  // console.log(user);

  return {
    setUser,
    setError,
    isLoading,
    setIsLoading,
    user,
    error,
    googleLogin,
    logOut,
    emailPasswordRegister,
    emailPasswordLogin,
    signInWithPopup,
    setIsDashBoard,
    isDashBoard,
  };
};
export default useFirebase;
