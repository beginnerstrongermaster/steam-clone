import { Image, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import SearchIconBtn from "../../assets/icons/search_icon_btn.png";
import useGameQueryStore from "../../stores/GameQueryStore";
import { useRef } from "react";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const searchText = inputRef.current?.value;
        if (searchText) setSearchText(searchText);
      }}
    >
      <InputGroup>
        <Input
          ref={inputRef}
          placeholder="search"
          variant="outline"
          bg="#316282"
        />
        <InputRightElement>
          <Image
            src={SearchIconBtn}
            onClick={() => setSearchText(inputRef.current?.value)}
            _hover={{ cursor: "pointer" }}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
