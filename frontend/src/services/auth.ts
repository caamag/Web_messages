import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

interface RegisterUserProps {
  email: string;
  password: string;
}

export const registerUser = async ({ email, password }: RegisterUserProps) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};
