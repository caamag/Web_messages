import { useEffect, useState } from "react";
import {
  searchPublicUsers,
  getCurrentPublicUser,
} from "../services/publicUser";
import { PublicUserProps } from "../@types/publicUser";
import { toast } from "react-toastify";
import { DocumentData } from "firebase/firestore";

export const usePublicUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [publicUser, setPublicUser] = useState<
    DocumentData | PublicUserProps
  >();

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

  const handleCurrentPublicUser = async () => {
    const response = await getCurrentPublicUser();
    setPublicUser(response);
  };

  useEffect(() => {
    handleCurrentPublicUser();
  }, []);

  return {
    loading,
    search,
    userResult,
    publicUser,
    handleCurrentPublicUser,
  };
};
