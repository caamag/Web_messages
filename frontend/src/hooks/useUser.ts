import {
  updateUserName,
  updateUserPhoto,
  updateUserDescription,
} from "../services/user";
import { useState } from "react";

export const UserUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleUpdateUserName = async (name: string) => {
    setLoading(true);
    try {
      await updateUserName(name);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("Error updating user name:", error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserPhoto = async (photoURL: string) => {
    setLoading(true);
    try {
      await updateUserPhoto(photoURL);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("Error updating user photo:", error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserDescription = async (description: string) => {
    setLoading(true);
    try {
      await updateUserDescription(description);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("Error updating user description:", error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    handleUpdateUserName,
    handleUpdateUserPhoto,
    handleUpdateUserDescription,
  };
};
