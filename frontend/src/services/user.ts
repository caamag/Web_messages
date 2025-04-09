import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { updatePublicUser } from "./publicUser";

export const updateUserName = async (name: string) => {
  const auth = getAuth();
  const user = auth.currentUser;

  await updateProfile(user!, {
    displayName: name,
  });

  await updatePublicUser({ name, photoURL: "", description: "" });
};

export const updateUserPhoto = async (photoURL: string) => {
  const auth = getAuth();
  const user = auth.currentUser;

  await updateProfile(user!, {
    photoURL,
  });

  await updatePublicUser({ name: "", photoURL, description: "" });
};

export const updateUserDescription = async (description: string) => {
  const user = getAuth().currentUser;
  if (!user) return;

  const userRef = doc(db, "publicUsers", user.uid);

  await updateDoc(userRef, {
    description,
  });

  await updatePublicUser({ name: "", photoURL: "", description });
};
