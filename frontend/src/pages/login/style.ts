import styled from "styled-components";
import { Colors } from "../../global/colors";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.lightGray};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 35px;
  }

  input {
    padding: 10px 0px;
    margin: 15px 0px;
    font-size: 16px;
    border-bottom: 1px solid gray;

    &:focus {
      outline: none;
      border-bottom: 2px solid black;
    }
  }
`;
