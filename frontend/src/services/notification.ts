import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { PublicUserNotifications } from "../@types/publicUser";

export const updateNotifications = async (userSelected: string) => {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não está autenticado");

  const userRef = doc(db, "publicUsers", userSelected);

  await updateDoc(userRef, {
    notification: arrayUnion({
      senderId: user.uid,
      senderName: user.displayName,
      senderEmail: user.email,
      photo: user.photoURL,
      timestamp: new Date().toISOString(),
    }),
  });
};

export const recuseNotification = async (senderId: string) => {
  const user = auth.currentUser;
  if (!user) throw new Error("Usuário não está autenticado");

  const userRef = doc(db, "publicUsers", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    throw new Error("Usuário não encontrado no Firestore");
  }

  const userData = userSnap.data();
  const notifications = userData.notification || [];
  const updatedNotifications = notifications.filter(
    (notification: PublicUserNotifications) =>
      notification.senderId !== senderId
  );

  await updateDoc(userRef, {
    notification: updatedNotifications,
  });
};
