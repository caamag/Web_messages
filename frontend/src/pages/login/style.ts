import styled, { keyframes } from "styled-components";
import { Colors } from "../../global/colors";

const FadeInSection = keyframes`
  0% {
    opacity: 0;
  } 100%{
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    margin-left: -20px;
  } 100% {
    margin-left: 0px;
  }
`;

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
    animation: ${fadeIn} 500ms;

    &:focus {
      outline: none;
      border-bottom: 2px solid black;
    }
  }

  h3 {
    font-size: 25px;
    font-weight: 550;
    animation: ${fadeIn} 500ms;
  }

  p {
    font-size: 14px;
    font-size: 400;
    animation: ${fadeIn} 500ms;
  }

  button {
    background: none;
    border: none;
    color: blue;
    margin-left: 15px;
  }

  div {
    animation: ${FadeInSection} 600ms;
  }
`;
