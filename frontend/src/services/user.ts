import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateUserName = async (name: string) => {
  const auth = getAuth();
  const user = auth.currentUser;

  await updateProfile(user!, {
    displayName: name,
  });
};

export const updateUserPhoto = async (photoURL: string) => {
  const auth = getAuth();
  const user = auth.currentUser;

  await updateProfile(user!, {
    photoURL,
  });
};

export const updateUserDescription = async (newDescription: string) => {
  const user = getAuth().currentUser;
  if (!user) return;

  const userRef = doc(db, "publicUsers", user.uid);

  await updateDoc(userRef, {
    description: newDescription,
  });
};
