import { Spinner } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameListItem from "./GameListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../../stores/GameQueryStore";
import { ScrollRestoration } from "react-router-dom";

const GameList = () => {
  const { gameQuery } = useGameQueryStore();
  const { data, fetchNextPage, hasNextPage, error } = useGames(gameQuery);

  if (error) throw error;
  const fetchedGamesCount =
    data?.pages?.reduce((total, page) => (total += page.count), 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<Spinner />}
      >
        {data?.pages?.map((gamePage) =>
          gamePage.results.map((game) => (
            <GameListItem key={game.id} game={game} />
          ))
        )}
      </InfiniteScroll>
      <ScrollRestoration />
    </>
  );
};

export default GameList;
