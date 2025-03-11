import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    } 100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    animation: ${LoadingAnimation} 600ms infinite linear;
  }
`;
