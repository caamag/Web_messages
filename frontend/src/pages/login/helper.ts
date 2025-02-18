import { useState } from "react";

export const loginHelper = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const changeVisibility = () => {
    setIsNewUser(!isNewUser);
  };

  return {
    isNewUser,
    changeVisibility,
  };
};
