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

  input {
    width: 300px;
    padding: 10px 20px;
    background-color: ${Colors.lightGray};
    margin-top: 15px;
    border-radius: 5px;
    font-size: 16px;

    &::placeholder {
      color: gray;
    }
  }
`;

export const ProfilePhoto = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 100%;

  background-image: url(${defaulProfile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: 150ms;
  box-shadow: 0px 0px 30px gray;

  &:hover {
    box-shadow: 0px 0px 30px black;
  }
`;
