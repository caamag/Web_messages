import * as Css from "./style";
import { Container, Content } from "../../global/styles";

//components
import Header from "../../components/header";

const HomePage = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Css.HomeContainer>
          <Css.FriendsContainer></Css.FriendsContainer>
          <Css.ChatContainer></Css.ChatContainer>
        </Css.HomeContainer>
      </Content>
    </Container>
  );
};

export default HomePage;
