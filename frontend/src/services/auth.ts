import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const registerUser = async (
  email: string,
  pass: string,
  name: string
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    pass
  );
  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });

  await setDoc(doc(db, "publicUsers", user.uid), {
    name,
    email,
    description: "",
    id: user.uid,
    photo: "",
    createdAt: new Date(),
  });
};

export const loginUser = async (email: string, pass: string) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = () => {
  signOut(auth);
};
