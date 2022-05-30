import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Text,
  Avatar,
  Badge,
  FormControl,
  Input,
  FormLabel,
  Stack,
  Heading,
  InputGroup,
  InputLeftElement,
  Button,
  Select,
  Box,
  HStack,
  Spacer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  StackProps,
} from "@chakra-ui/react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import InputSearch from "../input";
import TableDesktop from "./TableDesktop";

type Props = {
  items: any;
  columnsItens: any;
};

const DataTable = ({ items, columnsItens, ...rest }: Props) => {
  const data = items.items;

  const columns = React.useMemo(() => columnsItens.columns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useFilters,
    useSortBy,
    usePagination
  );

  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (e): void => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterInput(value);
  };

  return (
    <>
      <Stack spacing={8} bg="white">
        <InputSearch
          filterInput={filterInput}
          handleFilterChange={handleFilterChange}
        />
        <Heading color="#34423D" h="4" fontSize="16px">
          {" "}
          Lista de colaboradores{" "}
        </Heading>
        <TableDesktop
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          headerGroups={headerGroups}
          prepareRow={prepareRow}
          page={page}
        />
        <HStack>
          <Select
            value={pageSize}
            width="72px"
            height="36px"
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Select>
          <Spacer />
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </Button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </Button>{" "}
        </HStack>
      </Stack>
    </>
  );
};

export default DataTable;
