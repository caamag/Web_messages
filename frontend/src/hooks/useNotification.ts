import { useState } from "react";
import {
  updateNotifications,
  recuseNotification,
} from "../services/notification";
import { toast } from "react-toastify";
import { usePublicUser } from "./usePublicUser";

export const useNotification = () => {
  const { handleCurrentPublicUser } = usePublicUser();
  const [notificationLoader, setNotificationLoader] = useState<boolean>(false);

  const handleUpdateNotification = async (userSelected: string) => {
    setNotificationLoader(true);
    await updateNotifications(userSelected);
    toast.success("Request sent successfully");
    setNotificationLoader(false);
  };

  const handleRecuseNotification = async (senderId: string) => {
    setNotificationLoader(true);
    await recuseNotification(senderId);

    //reload notifications
    await handleCurrentPublicUser();
    toast.success("Request successfully declined");
    setNotificationLoader(false);
  };

  return {
    handleUpdateNotification,
    notificationLoader,
    handleRecuseNotification,
  };
};
