import React from 'react';
import { FiMenu } from "react-icons/fi";

import {
    Flex,
    Spacer,
    Box,
    // Text,
    IconButton,
} from "@chakra-ui/react"


export default function Header({ onOpen, ...rest }) {
    return (
    <Flex
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      flexDirection="row"
      {...rest}
    >
    <Box p='4'>
    <IconButton
        // display="flex"
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Box>
    <Spacer />
    {/* <Box p='4'>
    <Text
        // display="flex"
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        LWB
    </Text>
    </Box> */}
    </Flex>
    );
}
