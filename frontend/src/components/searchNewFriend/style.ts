import styled from "styled-components";
import { Colors } from "../../global/colors";

export const SearchContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 30%;
  height: calc(100% - 80px);

  top: 80px;
  left: ${(p) => (p.isVisible ? "0%" : "-30%")};
  background-color: ${Colors.primaryBackground};
  border-bottom-left-radius: 10px;
  transition: left 300ms ease;
`;

export const FriendsHeader = styled.header`
  width: 100%;
  height: 120px;
  color: white;
  font-size: 16px;

  button {
    color: white;
    font-size: 18px;
    background: none;
    margin: 0px 40px 0px 20px;

    display: flex;
    align-items: center;
  }

  .search-button {
    width: calc(100% - 37px);
    height: 40px;
    background-color: white;
    border-radius: 8px;
    margin-top: 10px;
    color: ${Colors.secondBackground};
    font-size: 16px;
    opacity: 0.7;
    transition: 150ms;

    display: flex;
    justify-content: center;

    &:hover {
      opacity: 1;
    }
  }
`;

export const SearchTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const SearchHeroContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchHero = styled.div`
  width: calc(100% - 55px);
  height: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${Colors.secondBackground};

  display: flex;
  justify-content: space-between;

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

export const UsersResultContainer = styled.div`
  width: 93%;
  margin: 0 auto;
  margin-top: 100px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserItem = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${Colors.secondBackground};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
  transition: 150ms;

  svg {
    font-size: 20px;
    margin-right: 15px;
    transition: 150ms;

    &:hover {
      scale: 1.2;
    }
  }

  &:hover {
    opacity: 1;
  }
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfile = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  margin: 0px 15px;
`;

export const UserDescription = styled.p`
  font-size: 12px;
`;
