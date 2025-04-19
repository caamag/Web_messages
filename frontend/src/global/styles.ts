import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    html {
        font-size: 62.5%;
        font-family: "Montserrat", serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button{
        cursor: pointer;
        border: none;
    }

    textarea {
        resize: none;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${Colors.darkGray};
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: calc(100% - 38px);
  max-width: 1600px;
  margin: 0 auto;
  height: calc(100% - 38px);
  background-color: rgb(40, 40, 40, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  overflow: hidden;
`;

export { GlobalStyle };
