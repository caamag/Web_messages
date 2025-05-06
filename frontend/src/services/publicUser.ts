import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { UpdatePublicUserProps } from "../@types/publicUser";
import { PublicUserProps } from "../@types/publicUser";

export const getCurrentPublicUser = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não está autenticado");

  const userRef = doc(db, "publicUsers", user.uid);
  const userSnap = await getDoc(userRef);
  return userSnap.data();
};

export const searchPublicUsers = async (
  nameSearched: string
): Promise<PublicUserProps[]> => {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não está autenticado");

  const querySnapshot = await getDocs(collection(db, "publicUsers"));

  const users: PublicUserProps[] = querySnapshot.docs.map((doc) => {
    const data = doc.data() as Omit<PublicUserProps, "id">;
    return { id: doc.id, ...data };
  });

  return users.filter((user) =>
    user.name.toLowerCase().includes(nameSearched.toLowerCase())
  );
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
      photoURL: data.photoURL,
    });
  }
};
