import styled from "styled-components";
import { Colors } from "../../global/colors";

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
`;

export const FriendsContainer = styled.div`
  width: 30%;
  height: 100%;
  border-bottom-left-radius: 10px;
  background: ${Colors.primaryBackground};
`;

export const FriendsHeader = styled.header`
  width: 100%;
  height: 120px;
`;

export const HeaderChatContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  button {
    margin-right: 20px;
    background: none;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 18px;
    margin-left: 20px;
  }

  div {
    display: flex;
  }
`;

export const HeaderSearch = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchHero = styled.div`
  width: calc(100% - 55px);
  height: 20px;
  margin: 0 auto;
  background-color: ${Colors.secondBackground};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  font-size: 14px;
  padding: 10px;

  input {
    width: 93%;
    height: 100%;
    background: none;
    color: ${Colors.lightGray};
    font-size: 14px;

    &::placeholder {
      color: gray;
    }
  }
`;

export const ChatContainer = styled.div`
  width: 70%;
  height: 100%;
  border-bottom-right-radius: 10px;
`;

export const NoContentChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 10rem;
  color: white;

  h3 {
    font-size: 22px;
    text-align: center;
  }
`;
