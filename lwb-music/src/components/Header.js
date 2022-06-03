import React from 'react';
import { FiMenu } from "react-icons/fi";

import {
    Flex,
    Spacer,
    Box,
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
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Box>
    <Spacer />
    </Flex>
    );
}
