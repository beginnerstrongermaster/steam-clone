import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchedResponse from "../entities/FetchedResponse";
import { Genre } from "../entities/Genre";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchedResponse<Genre>>("/genres").then((res) => res.data),
  });
};

export default useGenres;
