import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { Box, Heading, Divider } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import InputSearch from "../input";
import MenuMobile from "../MenuMobile";
import SiteTableMobileColaboradores from "../SiteTableMobileColaboradores";
import SiteTableMobileCargo from "../SiteTableMobileCargo";

type Props = {
  items: any;
};

const SiteTable = ({ items, ...rest }: Props) => {
  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (e): void => {
    const value = e.target.value || undefined;
    setFilterInput(value);
  };

  const [parentName, setParentName] = useState<string>("Colaborador");
  const updateName = (name: string): void => {
    setParentName(name);
  };

  return (
    <>
      <Box m={8} bg="white">
        <MenuMobile name={parentName} updateName={updateName} />
        <InputSearch
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
        />
        <Divider p="2" />
        <Heading fontSize="sm" m="6">
          Lista de {parentName}
        </Heading>
        {parentName == "Colaborador" ? (
          <SiteTableMobileColaboradores items={items} value={[]} />
        ) : (
          <SiteTableMobileCargo items={items} name={""} department={""} />
        )}
      </Box>
    </>
  );
};

export default SiteTable;
