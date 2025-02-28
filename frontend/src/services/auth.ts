import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const registerUser = async (email: string, pass: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, pass);
    return response;
  } catch (error) {
    throw new Error(`Erro no registro do usuário | ${error}`);
  }
};

export const loginUser = async (email: string, pass: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, pass);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(`Erro no login do usuário | ${error}`);
  }
};

export const logOut = () => {
  signOut(auth);
};
