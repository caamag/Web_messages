import * as Css from "./style";
import { Container, Content } from "../../global/styles";

//icons
import { CiChat1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";

//components
import Header from "../../components/header";

const HomePage = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Css.HomeContainer>
          <Css.FriendsContainer>
            <Css.FriendsHeader>
              <Css.HeaderChatContainer>
                <h2>Chats</h2>

                <div>
                  <button>
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
