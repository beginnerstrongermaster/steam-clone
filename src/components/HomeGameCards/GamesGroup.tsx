import { Box, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../../hooks/useGames";

const GamesGroup = () => {
  const { data, error } = useGames();

  if (error) throw error;
  //Get six games from fetched data and render them in the home game cards
  const sixGames = [1, 2, 3, 4, 5, 6];

  const firstPage = data?.pages[0];

  return (
    <Box paddingX="40px" paddingY={1}>
      <SimpleGrid columns={3} spacing={2}>
        {sixGames.map((gameIndex) => (
          <GameCard
            key={firstPage?.results[gameIndex].id}
            game={firstPage?.results[gameIndex]}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GamesGroup;
