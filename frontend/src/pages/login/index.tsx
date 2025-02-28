import * as Css from "./style";
import { useState } from "react";

//components
import LoginComponent from "../../components/loginForm";
import RegisterComponent from "../../components/registerForm";

const LoginPage = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const changeVisibility = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <Css.LoginContainer>
      <h1>Web_ Messages</h1>

      {!isNewUser ? (
        <LoginComponent changeVisibility={changeVisibility} />
      ) : (
        <RegisterComponent changeVisibility={changeVisibility} />
      )}
    </Css.LoginContainer>
  );
};

export default LoginPage;
