import * as Css from "./style";
import { Button } from "../UI/button";
import { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import Toast from "../toastMessage";
import Loader from "../loader";

interface LoginProps {
  changeVisibility: () => void;
}

const LoginComponent = ({ changeVisibility }: LoginProps) => {
  const authentication = useAuthentication();

  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  if (authentication.loading) {
    return <Loader />;
  }

  return (
    <Css.LoginContainer>
      {authentication.error && (
        <Toast type="error" message={authentication.errorMessage} />
      )}

      <h3>Sign in</h3>
      <p>to continue to web_ Messages</p>
      <br />

      <input
        type="text"
        placeholder="Email:"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        type="password"
        placeholder="Password:"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />

      <Button
        width="100%"
        styleType="default"
        onClick={() => {
          authentication.hanldeLogin(email, pass);
        }}
      >
        Login
      </Button>

      <p>
        No account? <button onClick={changeVisibility}>Create account!</button>
      </p>
    </Css.LoginContainer>
  );
};

export default LoginComponent;
