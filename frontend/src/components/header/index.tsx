import * as Css from "./style";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { logOut } from "../../services/auth";

//images
import profile from "../../assets/profile-user.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useAuth();

  return (
    <Css.Header>
      {isOpen && (
        <Css.ProfileSettingContainer>
          <Css.ProfileSettingsList>
            <NavLink to={"/profile"}>
              <Css.ProfileSettingsItem>Profile</Css.ProfileSettingsItem>
            </NavLink>

            <NavLink to={"/"}>
              <Css.ProfileSettingsItem>Settings</Css.ProfileSettingsItem>
            </NavLink>
            <Css.ProfileSettingsItem onClick={logOut}>
              Logout
            </Css.ProfileSettingsItem>
          </Css.ProfileSettingsList>
        </Css.ProfileSettingContainer>
      )}

      <h1>Web_ Messages</h1>

      <Css.Profile>
        <p>
          <b>{user?.displayName || "Without name"}</b>
          <br />
          {user?.email}
        </p>

        <Css.Photo
          src={user?.photoURL || profile}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </Css.Profile>
    </Css.Header>
  );
};

export default Header;
