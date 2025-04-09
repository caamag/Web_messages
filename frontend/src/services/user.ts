import { getAuth, updateProfile } from "firebase/auth";
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
  await updatePublicUser({ name: "", photoURL: "", description });
};
