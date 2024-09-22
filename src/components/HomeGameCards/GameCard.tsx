import { Card, Image, HStack, Text, CardBody } from "@chakra-ui/react";
import { Game } from "../../entities/Game";
import PlatformIcons from "../PlatformIcons";
import { Link } from "react-router-dom";

interface Props {
  game: Game | undefined;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`games/${game?.slug}`}>
      <Card
        transition="transform .15s ease-in"
        _hover={{ transform: "scale(1.03)" }}
      >
        <Image maxH="186px" src={game?.background_image} />
        <CardBody bg="#1A9FFF">
          <HStack padding={1}>
            <PlatformIcons parent_platforms={game?.parent_platforms} />
          </HStack>
          <Text fontSize="lg" fontWeight="bold">
            {game?.name}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
