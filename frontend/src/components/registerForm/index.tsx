import * as Css from "./style";

interface LoginProps {
  changeVisibility: () => void;
}

const RegisterComponent = ({ changeVisibility }: LoginProps) => {
  return (
    <Css.RegisterContainer>
      <h3>Register</h3>
      <p>to create your account</p>
      <br />
      <input type="text" placeholder="Name:" />
      <input type="text" placeholder="Email:" />
      <input type="password" placeholder="Password:" />
      <input type="password" placeholder="Confirm password:" />
      <p>
        Have account?
        <button onClick={changeVisibility}>Sign in!</button>
      </p>
    </Css.RegisterContainer>
  );
};

export default RegisterComponent;
