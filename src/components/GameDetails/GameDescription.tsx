import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import gameContext from "../../contexts/gameContext";

const GameDescription = () => {
  const [expanded, setExpanded] = useState(false);
  const game = useContext(gameContext);
  const description_raw = game.description_raw;
  const maxLength = 300;
  const isLessThanMaxLength = description_raw.length < maxLength;

  const aboutText = (description_raw: string) => {
    if (!description_raw) return "";

    if (description_raw.length < maxLength) return description_raw;

    if (expanded) return description_raw;
    else return description_raw.slice(0, maxLength) + "...";
  };

  return (
    <Box marginY={5}>
      <Text as="h2" fontSize="14px">
        ABOUT THIS GAME
      </Text>
      <Divider />
      {aboutText(description_raw)}
      {isLessThanMaxLength ? (
        expanded ? (
          <Button
            size="xs"
            onClick={() => {
              setExpanded(false);
            }}
          >
            Show Less
          </Button>
        ) : (
          <Button
            size="xs"
            onClick={() => {
              setExpanded(true);
            }}
          >
            Show More
          </Button>
        )
      ) : null}
    </Box>
  );
};

export default GameDescription;
