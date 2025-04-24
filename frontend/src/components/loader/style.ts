import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    } 100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div<{ btnLoader?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${(p) => (p.btnLoader ? "25px" : "50px")};
    animation: ${LoadingAnimation} 600ms infinite linear;
  }
`;
