import { Card, Image, Box, Flex, HStack } from "@chakra-ui/react";
import PlatformIcons from "../PlatformIcons";
import { Game } from "../../entities/Game";
import getCroppedImage from "../../services/image-url";
import { Link } from "react-router-dom";
import PositiveIcon from "../../assets/icons/user_reviews_positive.png";
import MixedIcon from "../../assets/icons/user_reviews_mixed.png";
import NegativeIcon from "../../assets/icons/user_reviews_negative.png";

interface Props {
  game: Game;
}

const GameListItem = ({ game }: Props) => {
  const ratingIconSrc = (rating: number) => {
    if (rating > 3.5) {
      return PositiveIcon;
    } else if (rating > 2) {
      return MixedIcon;
    } else {
      return NegativeIcon;
    }
  };

  return (
    <Link to={`/games/${game.slug}`}>
      <Card marginY={2} direction="row" overflow="hidden" variant="outline">
        <Image w="120px" src={getCroppedImage(game.background_image)} />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          paddingX={2}
        >
          <Box flex="1">{game.name}</Box>
          <Box flex="1">{<Image src={ratingIconSrc(game.rating)} />}</Box>
          <Box flex="1">
            <HStack>
              <PlatformIcons parent_platforms={game.parent_platforms} />
            </HStack>
          </Box>
          <Box flex="1">{game.released}</Box>
        </Flex>
      </Card>
    </Link>
  );
};

export default GameListItem;
