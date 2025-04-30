import { useEffect, useState } from "react";
import {
  searchPublicUsers,
  updateNotifications,
  getCurrentPublicUser,
} from "../services/publicUser";
import { PublicUserProps } from "../@types/publicUser";
import { toast } from "react-toastify";

export const usePublicUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [notificationLoader, setNotificationLoader] = useState<boolean>(false);
  const [publicUser, setPublicUser] = useState<any>();

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

  const handleUpdateNotification = async (userSelected: string) => {
    setNotificationLoader(true);
    await updateNotifications(userSelected);
    setNotificationLoader(false);
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
    notificationLoader,
    search,
    userResult,
    handleUpdateNotification,
    publicUser,
  };
};
