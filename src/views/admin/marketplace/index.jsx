/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { useState } from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";


import PastCards from "components/card/PastCards";
import UpCards from "components/card/UpCards";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";


export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  const [upcomingCards, setUpcomingCards] = useState([
    { id: 11, name: 'Abstract Colors', author: '12-05-2024', image: Nft1 },
    { id: 12, name: 'ETH AI Brain', author: '16-07-2024', image: Nft2 },
    { id: 13, name: 'Mesh Gradients', author: '29-11-2024', image: Nft3 },
    { id: 14, name: 'Color War', author: '22-01-2025', image: Nft5 },
  ]);

  const [pastCards, setPastCards] = useState([
    { id: 11, name: 'Swipe Circles', author: '13-02-2022', image: Nft4 },
    { id: 12, name: 'Colorful Heaven', author: '06-11-2022', image: Nft5 },
    { id: 13, name: '3D Cubes Art', author: '25-08-2023', image: Nft6 },
  ]);

  const handleDeleteCard = (id, cards, setCards) => {
    // Filter out the card with the provided id
    const updatedCards = cards.filter(card => card.id !== id);
    // Update the state with the filtered cards
    setCards(updatedCards);
  };


  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 4", "2xl": "1 / 1 / 2 / 2" }}>
         
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Upcoming Events
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
               
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap='10px'>
              {upcomingCards.map((card) => (
                <UpCards
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  author={card.author}
                  image={card.image}
                  handleDeleteCard={(id) => handleDeleteCard(id, upcomingCards, setUpcomingCards)}
                />
              ))}
            </SimpleGrid>
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              Past Events
            </Text>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap='20px'>
              {pastCards.map((card) => (
                <PastCards
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  author={card.author}
                  image={card.image}
                  handleDeleteCard={(id) => handleDeleteCard(id, pastCards, setPastCards)} 
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
     
      </Grid>
  
    </Box>
  );
}
