import { Box } from "@chakra-ui/react";
import EventBg from "../../assets/event/event.jpg";
import BlankImgLink from "./BlankImgLink";

const Event = () => {
  return (
    <Box
      overflow="hidden"
      h="432px"
      backgroundImage={EventBg}
      backgroundPosition="top center"
      backgroundSize="174%"
      paddingTop="30px"
    >
      <BlankImgLink />
    </Box>
  );
};

export default Event;
