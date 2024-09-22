import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";
import { ParentPlatform } from "../entities/ParentPlatform";

interface Props {
  parent_platforms: ParentPlatform[] | undefined;
}

const PlatformIcons = ({ parent_platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      {parent_platforms?.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]}></Icon>
      ))}
    </>
  );
};

export default PlatformIcons;
