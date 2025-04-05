import * as Css from "./style";
import { Container, Content } from "../../global/styles";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { UserUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

//compoenents
import Toast from "../../components/toastMessage";
import Loader from "../../components/loader";
import { Button } from "../../components/UI/button";

const ProfilePage = () => {
  const { user } = useAuth();
  const userHook = UserUser();
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleUpdate = () => {
    if (imageUrl) {
      userHook.handleUpdateUserPhoto(imageUrl);
    }
    if (name) {
      userHook.handleUpdateUserName(name);
    }
    if (description) {
      userHook.handleUpdateUserDescription(description);
    }
  };

  return (
    <Container>
      {userHook.error && (
        <Toast message="Error updating user data!" type="error" />
      )}

      {userHook.success && (
        <Toast message="User data updated successfully!" type="success" />
      )}

      <Content>
        <Css.ProfileContainer>
          {userHook.loading ? (
            <Loader />
          ) : (
            <>
              <Css.ProfilePhoto photo={user?.photoURL || ""} />
              <Css.ProfileName>{user?.displayName}</Css.ProfileName>

              <label>
                Name:
                <br />
                <input
                  type="text"
                  placeholder="Insert your name:"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>

              <label>
                Email:
                <br />
                <input type="text" placeholder={user?.email || ""} disabled />
              </label>
              <br />

              <label>
                Profile image:
                <br />
                <input
                  type="text"
                  placeholder="Image URL:"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                  }}
                />
              </label>

              <label>
                Description
                <br />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Talk about yourself..."
                />
              </label>

              <Css.BtnContainer>
                <Button
                  styleType="red"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </Button>

                <Button
                  styleType="default"
                  onClick={() => {
                    handleUpdate();
                  }}
                >
                  Submit Data
                </Button>
              </Css.BtnContainer>
            </>
          )}
        </Css.ProfileContainer>
      </Content>
    </Container>
  );
};

export default ProfilePage;
