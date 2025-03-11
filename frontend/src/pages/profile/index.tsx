import * as Css from "./style";
import { Container, Content } from "../../global/styles";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const ProfilePage = () => {
  const { user } = useAuth();

  const [imageUrl, setImageUrl] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <Container>
      <Content>
        <Css.ProfileContainer>
          <Css.ProfilePhoto />

          <input
            type="text"
            placeholder="Image URL:"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder={user?.displayName || "Withou name:"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input type="text" placeholder={user?.email || ""} disabled />
        </Css.ProfileContainer>
      </Content>
    </Container>
  );
};

export default ProfilePage;
