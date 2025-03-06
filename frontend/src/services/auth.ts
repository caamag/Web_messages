import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const registerUser = async (email: string, pass: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, pass);
  return response;
};

export const loginUser = async (email: string, pass: string) => {
  const response = await signInWithEmailAndPassword(auth, email, pass);
  return response;
};

export const logOut = () => {
  signOut(auth);
};
