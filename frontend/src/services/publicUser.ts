import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

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
