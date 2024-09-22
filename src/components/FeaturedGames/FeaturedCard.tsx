import { Box, Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Reasontag from "./Reasontag";
import { useState } from "react";
import getCroppedImage from "../../services/image-url";
import { Link } from "react-router-dom";
import useFeaturedGameStore from "../../stores/FeaturedGameIndexStore";
import { featuredGames } from "../../data/featuredGames";

const FeaturedlCard = () => {
  const [hoveredScreenshot, setHoveredScreenshot] = useState("");

  const selectedFeaturedGameIndex = useFeaturedGameStore(
    (s) => s.selectedFeaturedGameIndex
  );

  const selectedFeaturedGame = featuredGames[selectedFeaturedGameIndex];

  //get four screen shots of the featured game to display at the card's right part
  const fourScreenshots = [1, 2, 3, 4];

  // set the url for Big Picture(Left side)
  const BgImage = hoveredScreenshot
    ? getCroppedImage(hoveredScreenshot)
    : getCroppedImage(selectedFeaturedGame.background_image);

  return (
    <Link to={`games/${selectedFeaturedGame.slug}`}>
      <Card borderRadius="none" direction="row" overflow="hidden">
        {/* Big Picture render Place */}
        <Image objectFit="cover" src={BgImage} alt="background_img" />
        <CardBody padding="none">
          <Text padding={3} fontSize="2xl" fontFamily="arial">
            {selectedFeaturedGame.name}
          </Text>

          {/* Four Screenshots render place */}
          <SimpleGrid columns={2} spacing={2}>
            {fourScreenshots.map((sshotIndex) => (
              <Image
                transition="transform .15s ease-in"
                _hover={{ transform: "scale(1.05)" }}
                key={selectedFeaturedGame.short_screenshots[sshotIndex].id}
                src={selectedFeaturedGame.short_screenshots[sshotIndex].image}
                onMouseEnter={() =>
                  setHoveredScreenshot(
                    selectedFeaturedGame.short_screenshots[sshotIndex].image
                  )
                }
                onMouseLeave={() => setHoveredScreenshot("")}
                alt="screenshot"
              />
            ))}
          </SimpleGrid>
          <Box padding={3}>
            <Text fontSize="xl" fontFamily="arial">
              New Available
            </Text>
            <Reasontag />
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default FeaturedlCard;
