import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import RouteProp from "../entities/RouteProp";
import { Link, useLocation } from "react-router-dom";

interface Props {
  title: string;
  menuItems?: RouteProp[];
  fontSize?: string;
  fontWeight?: string;
}
const DropdownMenu = ({ title, menuItems, fontSize, fontWeight }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { pathname } = useLocation();

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        textDecoration={pathname.includes("/games") ? "underline" : ""}
        color={pathname.includes("/games") ? "#1a9fff" : ""}
        fontSize={fontSize}
        fontWeight={fontWeight}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {title}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {menuItems?.map((mi) => (
          <MenuItem key={mi.id}>
            {mi.route.slice(0, 3) === "http" ? (
              <a href={mi.route}>{mi.name}</a>
            ) : (
              <Link to={mi.route}>{mi.name}</Link>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
