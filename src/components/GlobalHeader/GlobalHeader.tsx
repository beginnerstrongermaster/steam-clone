import { Center, HStack, Image } from "@chakra-ui/react";
import logoSrc from "../../assets/logos/header_logo";
import InstallButton from "./InstallButton";
import HeaderNav from "./HeaderNav";
import { Link } from "react-router-dom";

const GlobalHeader = () => {
  const headerFontWeight = "500";

  return (
    <Center bg="#171d25" height="104px">
      <HStack spacing={5}>
        <Link to="/">
          <Image src={logoSrc} w="176px" h="44px" />
        </Link>
        <HeaderNav fontWeight={headerFontWeight} />
        <InstallButton />
      </HStack>
    </Center>
  );
};

export default GlobalHeader;
