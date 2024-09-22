import { Box, HStack, Image } from "@chakra-ui/react";
import { useContext } from "react";
import gameContext from "../../contexts/gameContext";
import useTrailers from "../../hooks/useTrailers";
import useScreenshots from "../../hooks/useScreenshots";
import useMediaStore from "../../stores/MediaStore";

const MediaBar = () => {
  const game = useContext(gameContext);

  const { data: trailers, error: trailerError } = useTrailers(game.id);

  const { data: screenshots, error: screenshotError } = useScreenshots(game.id);

  if (trailerError) throw trailerError;
  if (screenshotError) throw screenshotError;

  const setSelectedTrailer = useMediaStore((s) => s.setSelectedTrailer);

  const setSelectedScreenshot = useMediaStore((s) => s.setSelectedScreenshot);

  const selectedTrailer = useMediaStore((s) => s.selectedTrailer);
  const selectedScreenshot = useMediaStore((s) => s.selectedScreenshot);

  return (
    <>
      <HStack overflowX="scroll" h="175px" spacing={2} paddingY={5}>
        {trailers
          ? trailers.results.map((trailer) => (
              <Box
                border={
                  selectedTrailer.id === trailer.id ? "solid 5px" : "none"
                }
                as="video"
                key={trailer.id}
                h="100%"
                src={trailer.data[480]}
                poster={trailer.preview}
                cursor="pointer"
                onClick={() => {
                  setSelectedTrailer(trailer);
                }}
              />
            ))
          : null}
        {screenshots
          ? screenshots.results.map((screenshot) => (
              <Image
                border={
                  selectedScreenshot.id === screenshot.id ? "solid 5px" : "none"
                }
                _hover={{ cursor: "pointer" }}
                key={screenshot.id}
                h="100%"
                src={screenshot.image}
                onClick={() => {
                  setSelectedScreenshot(screenshot);
                }}
              />
            ))
          : null}
      </HStack>
    </>
  );
};

export default MediaBar;
