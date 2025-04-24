import { useState } from "react";
import { searchPublicUsers } from "../services/publicUser";
import { PublicUserProps } from "../@types/publicUser";
import { toast } from "react-toastify";

export const usePublicUser = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [userResult, setUserResult] = useState<PublicUserProps[]>([]);

  const search = async (nameSearched: string) => {
    setLoading(true);
    const data = await searchPublicUsers(nameSearched);

    if (data.length === 0) {
      setUserResult([]);
      toast.error("No users found.");
      setLoading(false);
      return;
    }
    setLoading(false);
    setUserResult(data);
  };

  return {
    loading,
    search,
    userResult,
  };
};
