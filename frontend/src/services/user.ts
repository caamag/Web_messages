import { getAuth, updateProfile } from "firebase/auth";

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
