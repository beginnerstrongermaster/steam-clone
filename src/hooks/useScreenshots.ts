import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchedResponse from "../entities/FetchedResponse";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gamePk: number) => {
  return useQuery({
    queryKey: ["screenshots", gamePk],
    queryFn: () =>
      apiClient
        .get<FetchedResponse<Screenshot>>(`/games/${gamePk}/screenshots`)
        .then((res) => res.data),
  });
};

export default useScreenshots;
