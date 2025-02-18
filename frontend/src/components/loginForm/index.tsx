import * as Css from "./style";

interface LoginProps {
  changeVisibility: () => void;
}

const LoginComponent = ({ changeVisibility }: LoginProps) => {
  return (
    <Css.LoginContainer>
      <h3>Sign in</h3>
      <p>to continue to web_ Messages</p>
      <br />
      <input type="text" placeholder="Email:" />
      <input type="password" placeholder="Password:" />
      <p>
        No account? <button onClick={changeVisibility}>Create account!</button>
      </p>
    </Css.LoginContainer>
  );
};

export default LoginComponent;
