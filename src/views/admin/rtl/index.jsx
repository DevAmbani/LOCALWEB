import { Box, Grid } from "@chakra-ui/react";
import Account from "views/admin/rtl/components/Account";

// Assets
import React from "react";

export default function Settings() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Account
        gridArea={{
        base: "3 / 1 / 4 / 2",
        lg: "2 / 1 / 3 / 3",
        "2xl": "1 / 3 / 2 / 4",
        }}
      >
      </Account>
    </Box>
  );
}