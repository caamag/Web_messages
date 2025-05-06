import styled, { keyframes } from "styled-components";
import { Colors } from "../../global/colors";

const FadeInAnimation = keyframes`
    0% {
        opacity: 0;
        scale: 0.8;
    }
    100% {
        opacity: 1;
        scale: 1;
    }
`;

export const NotificationContent = styled.div`
  position: relative;
  width: 60%;
  height: 60vh;
  padding: 60px 20px;
  background-color: ${Colors.primaryBackground};
  border-radius: 10px;
  overflow-y: auto;
  animation: 350ms ${FadeInAnimation} ease-in;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  font-size: 34px;
  color: rgb(200, 200, 200);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
  }
`;

export const NotificationCard = styled.div`
  width: 80%;
  height: 40px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  background-color: ${Colors.secondBackground};
  border-radius: 10px;
  padding: 20px 40px;
  color: white;
  margin-bottom: 30px;
`;

export const SenderData = styled.div`
  display: flex;
  align-items: center;
`;

export const SenderPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const SenderDescription = styled.p`
  font-size: 16px;
  margin-left: 20px;
`;

export const NotificationBtns = styled.div`
  display: flex;

  button {
    background: none;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    color: white;
    opacity: 0.6;
    transition: 150ms;

    &:hover {
      opacity: 1;
    }
  }
`;

export const AcceptBtn = styled.button`
  font-size: 35px !important;
`;

export const RecuseBtn = styled.button``;
