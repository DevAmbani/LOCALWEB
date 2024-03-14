import Card from "components/card/Card";

// <----- working fine ------>

import React from "react";
import { Table, Tbody, Td, Checkbox, Tr } from "@chakra-ui/react";

const CheckTable = ({ tableData, onCheckboxChange }) => {
  return (
    <Card>
      <Table variant="simple" color="gray.500" mb="24px">
      <Tbody>
        {tableData.map((booking, index) => (
          <Tr key={index}>
            <Td>{booking.bookingId}</Td>
            <Td>{booking.bookingName}</Td>
            <Td>
              <Checkbox
                isChecked={booking.showedUp}
                onChange={() => onCheckboxChange(booking.bookingId)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Card>
    
  );
};

export default CheckTable;




// import React, { useMemo } from "react";
// import { Flex, Text, Table, Thead, Tbody, Tr, Th, Td, Checkbox } from "@chakra-ui/react";
// import { useTable } from "react-table";

// const CheckTable = ({ tableData, selectedDate, selectedDay, setShowedUp }) => {
//   const columns = useMemo(
//     () => [
//       { Header: "ID", accessor: "bookingId" },
//       { Header: "Name", accessor: "bookingName" },
//       {
//         Header: "Showed Up",
//         accessor: "showedUp",
//         Cell: ({ cell: { value }, row }) => (
//           <Checkbox
//             isChecked={value}
//             onChange={() => setShowedUp(!value)}
//           />
//         )
//       }
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
//   } = useTable({ columns, data: tableData });

//   return (
//     <Card
//       direction="column"
//       w="100%"
//       px="0px"
//       overflowX={{ sm: "scroll", lg: "hidden" }}
//     >
//       <Flex px="25px" justify="space-between" mb="20px" align="center">
//         <Text
//           fontSize="22px"
//           fontWeight="700"
//           lineHeight="100%"
//         >
//           View Upcomming Booking
//         </Text>
//       </Flex>
//       <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
//         <Thead>
//           <Tr>
//             <Th colSpan={3}>{selectedDate} ({selectedDay})</Th>
//           </Tr>
//         </Thead>
//         <Tbody {...getTableBodyProps()}>
//           {rows.map((row, index) => {
//             prepareRow(row);
//             return (
//               <Tr {...row.getRowProps()} key={index}>
//                 {row.cells.map(cell => (
//                   <Td {...cell.getCellProps()} key={cell.column.id}>
//                     {cell.render("Cell")}
//                   </Td>
//                 ))}
//               </Tr>
//             );
//           })}
//         </Tbody>
//       </Table>
//     </Card>
//   );
// };

// export default CheckTable;
