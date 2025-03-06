import * as Css from "./style";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState } from "react";
import { Button } from "../UI/button";

//components
import Toast from "../toastMessage";
import Loader from "../loader";

interface LoginProps {
  changeVisibility: () => void;
}

const RegisterComponent = ({ changeVisibility }: LoginProps) => {
  const authentication = useAuthentication();

  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");

  if (authentication.loading) {
    return <Loader />;
  }

  return (
    <Css.RegisterContainer>
      {authentication.error && (
        <Toast type="error" message={authentication.errorMessage} />
      )}

      <h3>Register</h3>
      <p>to create your account</p>
      <br />

      <input type="text" placeholder="Name:" />

      <input
        type="email"
        placeholder="Email:"
        value={email}
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password:"
        value={pass}
        required
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Confirm password:"
        value={confirmPass}
        required
        onChange={(e) => {
          setConfirmPass(e.target.value);
        }}
      />

      <Button
        width="100%"
        styleType="default"
        type="submit"
        onClick={() => {
          authentication.handleRegister(email, pass, confirmPass);
        }}
      >
        Register
      </Button>
      <p>
        Have account?
        <button onClick={changeVisibility}>Sign in!</button>
      </p>
    </Css.RegisterContainer>
  );
};

export default RegisterComponent;
