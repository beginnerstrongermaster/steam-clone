import steamAboutURL from "../../ExternalURLs/steam_about";
import steamSupportURL from "../../ExternalURLs/steam_support";
import ExternalLink from "../ExternalLink";

interface Props {
  fontWeight: string;
}

const HeaderExternalLinks = ({ fontWeight }: Props) => {
  const externalHeaders = [
    { id: 1, name: "ABOUT", route: steamAboutURL },
    { id: 2, name: "SUPPORT", route: steamSupportURL },
  ];
  return (
    <>
      {externalHeaders.map((h) => (
        <ExternalLink
          key={h.id}
          exLink={h}
          fontSize="md"
          fontWeight={fontWeight}
        />
      ))}
    </>
  );
};

export default HeaderExternalLinks;
