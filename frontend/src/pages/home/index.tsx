import * as Css from "./style";
import { Container, Content } from "../../global/styles";

//icons
import { CiChat1 } from "react-icons/ci";

//components
import Header from "../../components/header";

const HomePage = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Css.HomeContainer>
          <Css.FriendsContainer></Css.FriendsContainer>
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
