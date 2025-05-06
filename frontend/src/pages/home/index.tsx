import * as Css from "./style";
import { Container, Content } from "../../global/styles";
import { useState } from "react";
import { usePublicUser } from "../../hooks/usePublicUser";
import { useNotification } from "../../hooks/useNotification";

//icons
import { CiChat1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";

//components
import Header from "../../components/header";
import SearchNewFriend from "../../components/searchNewFriend";
import NotificationModal from "../../components/notificationModal";

const HomePage = () => {
  const [newFriend, setNewFriend] = useState<boolean>(false);
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);

  const { publicUser } = usePublicUser();
  const { handleRecuseNotification, notificationLoader } = useNotification();
  const notificationCount = publicUser?.notification.length;

  const changeVisibility = () => {
    setNewFriend(!newFriend);
  };

  return (
    <Container>
      {openNotifications && (
        <NotificationModal
          closeModal={() => {
            setOpenNotifications(false);
          }}
          notifications={publicUser?.notification}
          recuse={handleRecuseNotification}
          loading={notificationLoader}
        />
      )}

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
                  <button
                    className="notification-button"
                    onClick={() => {
                      setOpenNotifications(true);
                    }}
                  >
                    <Css.NotificationCount>
                      {notificationCount}
                    </Css.NotificationCount>
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
