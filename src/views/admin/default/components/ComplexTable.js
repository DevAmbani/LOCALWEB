import React, { useMemo, useState } from "react";
import { Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons';
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import Search from "views/admin/dataTables/components/Search";
import Card from "components/card/Card";


export default function ColumnsTable(props) {
  const { columnsData, tableData, selectedDate } = props;
  const [searchText, setSearchText] = useState("");

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => {
    if (selectedDate) {
      return tableData.filter((item) => item.date === selectedDate);
    } else {
      return tableData;
    }
  }, [selectedDate, tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 100 }, // Set initial page size
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
  } = tableInstance;

  const handleSearchChange = (searchText) => {
    setSearchText(searchText);
    setGlobalFilter(searchText);
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card direction='column' w='100%' px='0px' overflowX={{ sm: "scroll", lg: "hidden" }}>
      <div style={{ padding: "10px" }}>
        <Search onSearch={handleSearchChange} />
      </div>

      <Flex px='25px' justify='space-between' mb='10px' align='center'>
        <Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
          People Enrolled
        </Text>
        <div style={{ display: "flex" }}>
          <Button leftIcon={<DownloadIcon />} variant="brand">
            Download List
          </Button>
        </div>
      </Flex>

      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "NAME" || cell.column.Header === "CONTACT" || cell.column.Header === "EMAIL" || cell.column.Header === "TYPE") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      maxH='30px !important'
                      py='8px'
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}

