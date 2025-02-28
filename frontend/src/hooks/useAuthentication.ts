import { registerUser } from "../services/auth";
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
    confirmPass: string
  ) => {
    setLoading(true);

    if (pass !== confirmPass) {
      setError(true);
      setErrorMessage("Senhas divergentes");
      return;
    } else if (pass.length <= 7) {
      setError(true);
      setErrorMessage("Senha fraca");
      return;
    }

    const response = await registerUser(email, pass);
    console.log(response);
    navigate("/");
    setLoading(false);
  };

  return {
    handleRegister,
    loading,
    error,
    errorMessage,
  };
};
