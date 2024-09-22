import { Box, Flex, VStack } from "@chakra-ui/react";
import CarouselChevronButtons from "./CarouselChevronButtons";
import { ReactNode } from "react";
import Thumbs from "./Thumbs";

interface Props {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  return (
    <VStack>
      <Box display="flex" flexDirection="row" alignItems="center">
        <CarouselChevronButtons>{children}</CarouselChevronButtons>
      </Box>
      <Flex flexDirection="row">
        <Thumbs />
      </Flex>
    </VStack>
  );
};

export default Carousel;
