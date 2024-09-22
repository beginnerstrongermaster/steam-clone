import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import FetchedResponse from "../entities/FetchedResponse";
import { Game } from "../entities/Game";

export interface GameQuery {
  genreId?: number;
  parent_platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

const useGames = (gameQuery?: GameQuery) => {
  return useInfiniteQuery<FetchedResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient
        .get<FetchedResponse<Game>>("/games", {
          params: {
            page: pageParam,
            genres: gameQuery?.genreId,
            parent_platforms: gameQuery?.parent_platformId,
            ordering: gameQuery?.sortOrder,
            search: gameQuery?.searchText,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) return allPages.length + 1;
      return undefined;
    },
    initialPageParam: 1,
  });
};

export default useGames;
