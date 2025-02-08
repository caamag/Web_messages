import prisma from "../config/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (
  name: string,
  email: string,
  pass: string
) => {
  const hashedPassword = await bcrypt.hash(pass, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return user;
};

export const loginUser = async (email: string, pass: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Usuário não localizado!");
  }

  const isValidPass = await bcrypt.compare(pass, user.password);

  if (!isValidPass) {
    throw new Error("Senha inválida!");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "2h",
    }
  );

  return { token, user };
};
