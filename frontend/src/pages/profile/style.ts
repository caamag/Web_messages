import styled from "styled-components";
import defaulProfile from "../../assets/profile-user.png";
import { Colors } from "../../global/colors";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: 16px;
    text-indent: 10px;
    margin: 15px 0px;
  }

  input {
    width: 400px;
    padding: 20px 30px;
    color: gray;
    background: none;
    border: 1px solid ${Colors.lightGray};
    box-shadow: 1px 1px 5px ${Colors.lightGray};
    margin-top: 5px;
    border-radius: 5px;
    font-size: 16px;

    &::placeholder {
      color: gray;
    }
  }
`;

export const ProfilePhoto = styled.div<{ photo: string }>`
  width: 250px;
  height: 250px;
  border-radius: 100%;

  background-image: url(${(p) => p.photo || defaulProfile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: 150ms;
  box-shadow: 0px 0px 30px gray;

  &:hover {
    box-shadow: 0px 0px 30px black;
  }
`;

export const BtnContainer = styled.div`
  width: 460px;
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    padding: 20px 30px;
    font-size: 16px;
  }
`;
