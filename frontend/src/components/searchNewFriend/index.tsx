import * as Css from "./style";
import { usePublicUser } from "../../hooks/usePublicUser";
import { useNotification } from "../../hooks/useNotification";
import { useState } from "react";

//images
import ProfileUser from "../../assets/profile-user.png";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

//components
import Loader from "../loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FriendsProps {
  isVisible: boolean;
  changeVisibility: () => void;
}

const SearchNewFriend = ({ isVisible, changeVisibility }: FriendsProps) => {
  const helper = usePublicUser();
  const { notificationLoader, handleUpdateNotification } = useNotification();
  const [nameSearched, setNameSearched] = useState<string>("");

  return (
    <Css.SearchContainer isVisible={isVisible}>
      <ToastContainer />
      <Css.FriendsHeader>
        <Css.SearchTitle>
          <button
            onClick={() => {
              changeVisibility();
            }}
          >
            <FaArrowLeftLong />
          </button>
          New Friend
        </Css.SearchTitle>
        <Css.SearchHeroContainer>
          <Css.SearchHero>
            <IoSearch />
            <input
              type="text"
              placeholder="Search by name:"
              value={nameSearched}
              onChange={(e) => {
                setNameSearched(e.target.value);
              }}
            />
          </Css.SearchHero>
        </Css.SearchHeroContainer>
        <button
          className="search-button"
          onClick={() => {
            helper.search(nameSearched);
          }}
        >
          {helper.loading ? <Loader btnLoader /> : "Search"}
        </button>
      </Css.FriendsHeader>

      {helper.userResult.length > 0 && (
        <Css.UsersResultContainer>
          {helper.userResult.map((user) => (
            <Css.UserItem>
              {notificationLoader ? (
                <Loader />
              ) : (
                <>
                  <Css.UserData>
                    <Css.UserProfile
                      src={user.photoURL ?? ProfileUser}
                      alt=""
                    />
                    <Css.UserDescription>
                      <b>{user.name}</b> <br />
                      {user.email}
                    </Css.UserDescription>
                  </Css.UserData>
                  <IoPersonAddOutline
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdateNotification(user.id);
                    }}
                  />
                </>
              )}
            </Css.UserItem>
          ))}
        </Css.UsersResultContainer>
      )}
    </Css.SearchContainer>
  );
};

export default SearchNewFriend;
