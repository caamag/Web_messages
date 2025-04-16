import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
`;

export const FriendsContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: black;
  border-bottom-left-radius: 10px;
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
  opacity: 0.3;

  h3 {
    font-size: 22px;
    text-align: center;
  }
`;
