import { HStack } from "@chakra-ui/react";
import PlatformsSelector from "./PlatformsSelector";
import SortOrdersSelector from "./SortOrderSelector";

const SelectorBar = () => {
  return (
    <HStack paddingTop={5}>
      <PlatformsSelector />
      <SortOrdersSelector />
    </HStack>
  );
};

export default SelectorBar;
