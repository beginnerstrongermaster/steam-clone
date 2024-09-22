import { Box, Select, Image } from "@chakra-ui/react";
import ArrowDownIcon from "../../assets/icons/ico_arrow_dn_for_select.png";
import usePlatforms from "../../hooks/usePlatforms";
import useGameQueryStore from "../../stores/GameQueryStore";
import { ChangeEvent } from "react";

const PlatformsSelector = () => {
  const { data, error } = usePlatforms();
  if (error) throw error;

  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const parent_platformId = useGameQueryStore(
    (s) => s.gameQuery.parent_platformId
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatformId = event.target.value;
    if (selectedPlatformId) setPlatformId(parseInt(selectedPlatformId));
    else setPlatformId(undefined);
  };
  return (
    <>
      <Box as="div">{"Platform:"}</Box>
      <Select
        size="sm"
        icon={<Image src={ArrowDownIcon} />}
        onChange={handleChange}
      >
        <option value=""></option>
        {data?.results.map((platform) => (
          <option
            key={platform.id}
            value={platform.id}
            selected={parent_platformId === platform.id}
          >
            {platform.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default PlatformsSelector;
