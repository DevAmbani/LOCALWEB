// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/rtl/components/Information";
import { Button } from "@chakra-ui/react";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Account
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Name'
          value='Mr. '
        />
        <Information
          boxShadow={cardShadow}
          title='Billing Address'
          value='India'
        />
        <Information
          boxShadow={cardShadow}
          title='Phone Number'
          value='9876543210'
        />
        <Information
          boxShadow={cardShadow}
          title='City, State'
          value='Mumbai, Maharashtra'
        />
        <Information
          boxShadow={cardShadow}
          title='Email Address'
          value='abc@gmail.com'
        />
        <Information
          boxShadow={cardShadow}
          title='ZIP Code'
          value='670076'
        />
      </SimpleGrid>
      <Button
      mt={{ base: "20px", "2xl": "auto" }}
      variant='brand'
      fontWeight='500'
      >
        Update Information
      </Button>
    </Card>
  );
}