import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const firebaseInit = () => {
  initializeApp(firebaseConfig);
};
export default firebaseInit;
