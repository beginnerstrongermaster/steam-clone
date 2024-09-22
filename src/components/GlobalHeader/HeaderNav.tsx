import DropdownMenu from "../DropdownMenu";
import HeaderExternalLinks from "./HeaderExternalLinks";

interface Props {
  fontWeight: string;
}
const HeaderNav = ({ fontWeight }: Props) => {
  const storeMenuItems = [
    { id: 1, name: "Games", route: "games" },
    { id: 2, name: "News", route: "https://store.steampowered.com/news/" },
    { id: 3, name: "Stats", route: "https://store.steampowered.com/charts" },
  ];

  return (
    <>
      <DropdownMenu
        title="STORE"
        menuItems={storeMenuItems}
        fontSize="md"
        fontWeight={fontWeight}
      />
      <HeaderExternalLinks fontWeight={fontWeight} />
    </>
  );
};

export default HeaderNav;
