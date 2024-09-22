import { Button, Image } from "@chakra-ui/react";
import steamAboutURL from "../../ExternalURLs/steam_about";
import InstallIcon from "../../assets/icons/btn_header_installsteam_download.png";

const InstallButton = () => {
  return (
    <Button
      leftIcon={<Image src={InstallIcon} />}
      bg="#5c7e10"
      variant="solid"
      borderRadius="none"
      fontSize="11px"
      size="xs"
    >
      <a href={steamAboutURL}>Install Steam</a>
    </Button>
  );
};

export default InstallButton;
