import { Box } from "@chakra-ui/react";
import useFeaturedGameStore from "../../stores/FeaturedGameIndexStore";
import { featuredGames } from "../../data/featuredGames";

const Thumbs = () => {
  const { selectedFeaturedGameIndex, setSelectedFeaturedGameIndex } =
    useFeaturedGameStore();

  if (!featuredGames) return null;

  return (
    <>
      {featuredGames.map((fg, index) => (
        <Box
          as="button"
          marginX={1}
          w="15px"
          h="9px"
          bg="#FFFFFF33"
          borderRadius={2}
          key={fg.id}
          opacity={
            featuredGames[selectedFeaturedGameIndex].id === fg.id ? "1" : "0.5"
          }
          _hover={{ opacity: 1 }}
          onClick={() => setSelectedFeaturedGameIndex(index)}
        />
      ))}
    </>
  );
};

export default Thumbs;
