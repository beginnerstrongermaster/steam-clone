import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import GameMedia from "./GameMedia";
import GameSummary from "./GameSummary";
import useMediaStore from "../../stores/MediaStore";
import Trailer from "./Trailer";
const MediaAndSummary = () => {
  const selectedTrailer = useMediaStore((s) => s.selectedTrailer);
  const selectedScreenshot = useMediaStore((s) => s.selectedScreenshot);

  return (
    <SimpleGrid columns={2}>
      <Box>
        <GameMedia>
          {selectedTrailer.data ? (
            <Box
              as="video"
              src={selectedTrailer.data.max}
              poster={selectedTrailer.preview}
              controls
            />
          ) : selectedScreenshot.image ? (
            <Image src={selectedScreenshot.image} />
          ) : (
            <Trailer />
          )}
        </GameMedia>
      </Box>
      <Box paddingX={5}>
        <GameSummary />
      </Box>
    </SimpleGrid>
  );
};

export default MediaAndSummary;
