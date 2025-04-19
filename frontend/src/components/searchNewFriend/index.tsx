import * as Css from "./style";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

interface FriendsProps {
  isVisible: boolean;
  changeVisibility: () => void;
}

const SearchNewFriend = ({ isVisible, changeVisibility }: FriendsProps) => {
  return (
    <Css.SearchContainer isVisible={isVisible}>
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
            <input type="text" placeholder="Search by name:" />
          </Css.SearchHero>
        </Css.SearchHeroContainer>
      </Css.FriendsHeader>
    </Css.SearchContainer>
  );
};

export default SearchNewFriend;
