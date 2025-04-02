import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { updateUserName } from "./user";

export const registerUser = async (
  email: string,
  pass: string,
  name: string
) => {
  await createUserWithEmailAndPassword(auth, email, pass);
  await updateUserName(name);
};

export const loginUser = async (email: string, pass: string) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = () => {
  signOut(auth);
};
