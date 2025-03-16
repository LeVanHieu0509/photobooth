import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { SearchInputWrapper } from "./styled";
import SearchInputIcon from "../icons/search-input";

interface SearchInputProps {}

const SearchInput = ({}: SearchInputProps) => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }: any) => setEmail(target.value);

  return (
    <SearchInputWrapper>
      <div className="w-72">
        <Input className="p-4" label="Input With Icon" icon={<SearchInputIcon />} />
      </div>
    </SearchInputWrapper>
  );
};

export default SearchInput;
