import { useContext } from "react";
import gameContext from "../../contexts/gameContext";
import { Box, HStack, Tag, Text } from "@chakra-ui/react";
import PlatformIcons from "../PlatformIcons";

const GameSummary = () => {
  const game = useContext(gameContext);

  const reviewLevel = (rating: number) => {
    if (rating > 3) return "Positive";
    if (rating < 2) return "Negative";
    return "Mixed";
  };

  return (
    <>
      <Box paddingLeft={1}>
        <Text>{`ALL REVIEWS: ${reviewLevel(game.rating)} (${
          game.ratings_count
        })`}</Text>
        <Text>{`RELEASE DATE: ${game.released}`}</Text>
        <Text>{`DEVELOPER: ${game.developers[0].name}`}</Text>
        <Text>{`PUBLISHER: ${game.publishers[0].name}`}</Text>
      </Box>
      <HStack spacing={3} padding={1}>
        <PlatformIcons parent_platforms={game.parent_platforms} />
      </HStack>
      {game.tags.map((tag) => (
        <Tag color="#67c1f5" key={tag.id} margin={1}>
          {tag.name}
        </Tag>
      ))}
    </>
  );
};

export default GameSummary;
