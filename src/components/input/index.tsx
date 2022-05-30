import React, { FormEvent } from "react";
import {
  FormControlProps,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

interface SiteTableDesktopProps extends FormControlProps {
  filterInput: string;
  handleFilterChange: (event: FormEvent<HTMLInputElement>) => void;
}

const InputSearch = ({
  filterInput,
  handleFilterChange,
  ...rest
}: SiteTableDesktopProps) => {
  const type = "nome";
  return (
    <>
      <FormControl variant="floating" id="first-name">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            placeholder={`Pesquise por ${type}  ou cpf `}
            value={filterInput}
            onChange={handleFilterChange}
            _placeholder={{ color: "#587169" }}
          />
        </InputGroup>
        <FormLabel>Pesquise por</FormLabel>
      </FormControl>
    </>
  );
};

export default InputSearch;
