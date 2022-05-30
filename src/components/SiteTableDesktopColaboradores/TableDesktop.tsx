import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableProps } from "@chakra-ui/react";

interface SiteTableDesktopProps extends TableProps {
  getTableProps: any;
  getTableBodyProps: any;
  headerGroups: any;
  prepareRow: any;
  page: any;
}

const TableDesktop = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  page,
  ...rest
}: SiteTableDesktopProps) => {
  const type = "nome";
  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr
              bg={"white"}
              color="#587169"
              alignItems="center"
              border="1px"
              borderColor="#CAD6D1"
              fontFamily="Poppins.600"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody
          bg={"white"}
          color="#587169"
          alignItems="center"
          border="1px"
          borderColor="#CAD6D1"
          fontFamily="Poppins.600"
          {...getTableBodyProps()}
        >
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                    isNumeric={
                      cell.column.active == "active" ? "active" : "disable"
                    }
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default TableDesktop;
