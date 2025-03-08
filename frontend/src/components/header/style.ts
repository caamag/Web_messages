import styled, { keyframes } from "styled-components";
import { Colors } from "../../global/colors";

export const Header = styled.header`
  width: 100%;
  height: 80px;

  background-color: ${Colors.lightGray};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  h1 {
    font-size: 24px;
    margin-left: 20px;
    font-weight: 500;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  p {
    text-align: right;
    margin-right: 10px;
    font-size: 12px;
  }
`;

export const Photo = styled.img`
  width: 40px;
  height: auto;
  cursor: pointer;
  filter: invert(40%);
  transition: 150ms;

  &:hover {
    filter: invert(0%);
  }
`;

const FadeInProfile = keyframes`
    0% {
        transform: scale(0);
        transform-origin: top right;
    } 
    100% {
        transform: scale(1);
        transform-origin: top right;
    }
`;

export const ProfileSettingContainer = styled.div`
  position: absolute;
  top: 75px;
  right: 10px;
  border-radius: 5px;
  width: 250px;
  animation: 500ms ${FadeInProfile};

  background-color: white;
`;

export const ProfileSettingsList = styled.ul`
  width: 100%;
  padding: 10px 0px;

  a {
    color: black;
  }
`;

export const ProfileSettingsItem = styled.li`
  max-width: 100%;
  cursor: pointer;
  list-style: none;
  font-size: 16px;
  padding: 10px;
  transition: 150ms;

  &:hover {
    background-color: ${Colors.lightGray};
  }
`;
