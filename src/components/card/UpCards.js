// Chakra imports
import {
    AvatarGroup,
    Avatar,
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/card/Card.js";
  // Assets
  import React, { useState } from "react";
  import { IoHeart, IoHeartOutline } from "react-icons/io5";
  import { MdEdit, MdDownload, MdDelete } from 'react-icons/md';
  import Swal from 'sweetalert2';
  import { Link } from 'react-router-dom';

  export default function UpCards(props) {
    const { id, image, name, author, handleDeleteCard} = props;
    const [like, setLike] = useState(false);
    const textColor = useColorModeValue("navy.700", "white");
  
   
  
    const handleDeleteUpCards = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this item!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.isConfirmed) {
          handleDeleteCard(id);
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        }
      });
    };
  
    return (
      <Card p='20px'>
        <Flex direction={{ base: "column" }} justify='center'>
          <Box mb={{ base: "20px", "2xl": "20px" }} position='relative'>
            <Image
              src={image}
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "100%" }}
              borderRadius='20px'
            />
            <Button
              position='absolute'
              bg='white'
              _hover={{ bg: "whiteAlpha.900" }}
              _active={{ bg: "white" }}
              _focus={{ bg: "white" }}
              p='0px !important'
              top='14px'
              right='14px'
              borderRadius='50%'
              minW='36px'
              h='36px'
              onClick={() => {
                setLike(!like);
              }}>
              <Icon
                transition='0.2s linear'
                w='20px'
                h='20px'
                as={like ? IoHeart : IoHeartOutline}
                color='brand.500'
              />
            </Button>
          </Box>
          <Flex flexDirection='column' justify='space-between' h='100%'>
            <Flex
              justify='space-between'
              direction={{
                base: "row",
                md: "column",
                lg: "row",
                xl: "column",
                "2xl": "row",
              }}
              mb='auto'>
              <Flex direction='column'>
                <Text
                  color={textColor}
                  fontSize={{
                    base: "xl",
                    md: "lg",
                    lg: "lg",
                    xl: "lg",
                    "2xl": "md",
                    "3xl": "lg",
                  }}
                  mb='5px'
                  fontWeight='bold'
                  me='14px'>
                  {name}
                </Text>
                <Text
                  color='secondaryGray.600'
                  fontSize={{
                    base: "sm",
                  }}
                  fontWeight='400'
                  me='14px'>
                  {author}
                </Text>
              </Flex>
            </Flex>
            <Flex
              align='start'
              justify='space-between'
              direction={{
                base: "row",
                md: "column",
                lg: "row",
                xl: "column",
                "2xl": "row",
              }}
              mt='25px' mb='10px'>
                <Icon as={MdDelete} onClick={() =>  handleDeleteUpCards(id)} style={{ width: '30px', position: 'absolute', left: 0, marginLeft: '15px', cursor: 'pointer', color: 'secondaryGray.500', h: '20px', w: '20px' }} />
                <Link to="/eventsCount">
                <Icon as={MdEdit}  style={{ width: '30px', position: 'absolute', right: 0, marginRight: '15px', cursor: 'pointer', color: 'secondaryGray.500', h: '20px', w: '20px' }} />
                </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  }
  