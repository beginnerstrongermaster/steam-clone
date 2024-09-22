import { Box } from "@chakra-ui/react";
import RouteProp from "../entities/RouteProp";

interface Props {
  exLink: RouteProp;
  fontSize: string;
  fontWeight: string;
}

const ExternalLink = ({ exLink, fontSize, fontWeight }: Props) => {
  return (
    <Box
      as="a"
      href={exLink.route}
      key={exLink.id}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {exLink.name}
    </Box>
  );
};

export default ExternalLink;
