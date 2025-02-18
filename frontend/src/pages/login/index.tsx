import * as Css from "./style";
import { loginHelper } from "./helper";

//components
import LoginComponent from "../../components/loginForm";
import RegisterComponent from "../../components/registerForm";

const LoginPage = () => {
  const helper = loginHelper();

  return (
    <Css.LoginContainer>
      <h1>Web_ Messages</h1>

      {!helper.isNewUser ? (
        <LoginComponent changeVisibility={helper.changeVisibility} />
      ) : (
        <RegisterComponent changeVisibility={helper.changeVisibility} />
      )}
    </Css.LoginContainer>
  );
};

export default LoginPage;
