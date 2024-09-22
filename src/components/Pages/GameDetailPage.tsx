import { Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import useGame from "../../hooks/useGame";
import GameDescription from "../GameDetails/GameDescription";
import MediaAndSummary from "../GameDetails/MediaAndSummary";
import gameContext from "../../contexts/gameContext";
import MediaBar from "../GameDetails/MediaBar";

const GameDetailPage = () => {
  const location = useLocation();
  const curGameSlug = location.pathname.slice(7);
  const { data, error } = useGame(curGameSlug);
  if (error) throw error;
  if (!data) return null;
  return (
    <Box padding={5}>
      <Text fontSize="26px">{data?.name}</Text>
      <gameContext.Provider value={data}>
        <MediaAndSummary />
        <MediaBar />
        <GameDescription />
      </gameContext.Provider>
    </Box>
  );
};

export default GameDetailPage;
