import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchedResponse from "../entities/FetchedResponse";
import { Trailer } from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () =>
      apiClient
        .get<FetchedResponse<Trailer>>(`/games/${gameId}/movies`)
        .then((res) => res.data),
  });
};

export default useTrailers;
