import { registerUser, loginUser } from "../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthentication = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async (
    email: string,
    pass: string,
    confirmPass: string,
    name: string
  ) => {
    setLoading(true);

    if (pass !== confirmPass) {
      setError(true);
      setErrorMessage("Senhas divergentes");
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }

    try {
      await registerUser(email, pass, name);
      navigate("/");
    } catch (error) {
      setError(true);
      setErrorMessage("Erro ao criar conta. Tente novamente mais tarde.");
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const hanldeLogin = async (email: string, pass: string) => {
    if (!email || !pass) {
      setError(true);
      setErrorMessage("Informe o email e a senha.");
      return;
    }

    setLoading(true);
    try {
      await loginUser(email, pass);
      navigate("/");
    } catch (error) {
      setError(true);
      setErrorMessage("Erro ao logar, Tente novamente mais tarde.");
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRegister,
    hanldeLogin,
    loading,
    error,
    errorMessage,
  };
};
