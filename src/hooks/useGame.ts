import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "../entities/Game";

const useGame = (gameSlug: string) => {
  return useQuery({
    queryKey: ["games", gameSlug],
    queryFn: () =>
      apiClient.get<Game>("/games/" + gameSlug).then((res) => res.data),
  });
};

export default useGame;
