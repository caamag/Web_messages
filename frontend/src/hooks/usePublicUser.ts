import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const usePublicUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
};
