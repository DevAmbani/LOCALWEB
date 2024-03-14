// Chakra imports
import { Button, ButtonGroup } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ComplexTable from "views/admin/default/components/ComplexTable";
import {
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import Imagecarousel from "./components/image-carousel/Imagecarousel";
import TotalSpent from "./components/TotalSpent";

export default function UserReports() {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button leftIcon={<AddIcon />} variant="brand" className="bg={bgcolor}">
          Create New Event
        </Button>
      </div>
      <Imagecarousel />
    </Box>
  );
}
