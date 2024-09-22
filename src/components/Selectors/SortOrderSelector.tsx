import { Box, Select, Image } from "@chakra-ui/react";
import ArrowDownIcon from "../../assets/icons/ico_arrow_dn_for_select.png";
import useGameQueryStore from "../../stores/GameQueryStore";
import { ChangeEvent } from "react";

const SortOrdersSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOrder = event.target.value;
    setSortOrder(selectedSortOrder);
  };
  return (
    <>
      <Box as="div" whiteSpace="nowrap">
        {"Sort By:"}
      </Box>
      <Select
        size="sm"
        icon={<Image src={ArrowDownIcon} />}
        onChange={handleChange}
      >
        <option value=""></option>
        {sortOrders.map((order) => (
          <option
            key={order.value}
            value={order.value}
            selected={sortOrder === order.value}
          >
            {order.label}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SortOrdersSelector;
