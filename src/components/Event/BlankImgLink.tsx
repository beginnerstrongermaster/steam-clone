import { Box, Image } from "@chakra-ui/react";
import eventURL from "../../ExternalURLs/steam_event";
import BlankBg from "../../assets/event/blank.gif";

const BlankImgLink = () => {
  return (
    <Box as="a" href={eventURL} h="90%">
      <Image src={BlankBg} h="100%" />
    </Box>
  );
};

export default BlankImgLink;
