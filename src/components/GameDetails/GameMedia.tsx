import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameMedia = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default GameMedia;
