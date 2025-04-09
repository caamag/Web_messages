import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { UpdatePublicUserProps } from "../@types/publicUser";

export const getPublicUserData = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não está autenticado");

  const userRef = doc(db, "publicUsers", user.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    throw new Error("Usuário público não encontrado");
  }
};

export const updatePublicUser = async (data: UpdatePublicUserProps) => {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não está autenticado");

  const userRef = doc(db, "publicUsers", user.uid);

  if (data.name) {
    await updateDoc(userRef, {
      name: data.name,
    });
  }

  if (data.description) {
    await updateDoc(userRef, {
      description: data.description,
    });
  }

  if (data.photoURL) {
    await updateDoc(userRef, {
      photo: data.photoURL,
    });
  }
};
