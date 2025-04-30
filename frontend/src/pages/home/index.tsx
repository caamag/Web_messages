import * as Css from "./style";
import { Container, Content } from "../../global/styles";
import { useState } from "react";
import { usePublicUser } from "../../hooks/usePublicUser";

//icons
import { CiChat1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

//components
import Header from "../../components/header";
import SearchNewFriend from "../../components/searchNewFriend";

const HomePage = () => {
  const [newFriend, setNewFriend] = useState<boolean>(false);
  const { user } = useAuth();
  const { publicUser } = usePublicUser();
  const notificationList = publicUser.notification.lenght;

  const changeVisibility = () => {
    setNewFriend(!newFriend);
  };

  return (
    <Container>
      <Content>
        <Header />
        <Css.HomeContainer>
          <SearchNewFriend
            isVisible={newFriend}
            changeVisibility={changeVisibility}
          />

          <Css.FriendsContainer>
            <Css.FriendsHeader>
              <Css.HeaderChatContainer>
                <h2>Chats</h2>

                <div>
                  <button
                    onClick={() => {
                      changeVisibility();
                    }}
                  >
                    <IoPersonAddOutline />
                  </button>
                  <button>
                    <IoIosNotificationsOutline />
                  </button>
                </div>
              </Css.HeaderChatContainer>

              <Css.HeaderSearch>
                <Css.SearchHero>
                  <IoSearch />
                  <input type="text" placeholder="Search" />
                </Css.SearchHero>
              </Css.HeaderSearch>
            </Css.FriendsHeader>

            <Css.NoFriends>No chat avaliable...</Css.NoFriends>
          </Css.FriendsContainer>

          <Css.ChatContainer>
            <Css.NoContentChat>
              <CiChat1 />
              <h3>
                Select a friend to start <br /> a conversation...
              </h3>
            </Css.NoContentChat>
          </Css.ChatContainer>
        </Css.HomeContainer>
      </Content>
    </Container>
  );
};

export default HomePage;
