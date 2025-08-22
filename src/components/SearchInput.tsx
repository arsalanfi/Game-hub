import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        padding={2}
        placeholder="Search Game ..."
        variant="subtle"
      />
    </InputGroup>
  );
};

export default SearchInput;
