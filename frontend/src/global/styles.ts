import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    html {
        font-size: 62.5%;
        font-family: 'Times New Roman', Times, serif;
    }

    input {
        border: none;
    }

    a {
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }
`;

export { GlobalStyle };
