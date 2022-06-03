import React from 'react';
import { FiMenu } from "react-icons/fi";

import {
    Flex,
    Spacer,
    Box,
    ButtonGroup,
    IconButton,
    Text,
} from "@chakra-ui/react"


export default function Header({ onOpen, ...rest }) {
    return (
    <Flex
      px="1"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      flexDirection="flex-end"
      {...rest}
    >
    <ButtonGroup
      display="flex"
    >
    <Box p='4'>
    <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Box>
    <Spacer />
    <Box p='5'>
    <Text 
        fontSize="2xl" 
        fontFamily="monospace" 
        fontWeight="bold"
      >
          LWB
        </Text>
    </Box>
    </ButtonGroup>
    </Flex>
    );
}
