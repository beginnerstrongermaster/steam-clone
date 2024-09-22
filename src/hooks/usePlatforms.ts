import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchedResponse from "../entities/FetchedResponse";
import { Platform } from "../entities/Platform";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchedResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
  });
};

export default usePlatforms;
