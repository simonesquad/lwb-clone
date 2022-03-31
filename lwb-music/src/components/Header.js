import React from 'react';
import { FiMenu } from "react-icons/fi";

import {
    Flex,
    Text,
    IconButton,
} from "@chakra-ui/react"


export default function Header({ onOpen, ...rest }) {
    return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      display="flex"
      top="0"
      height="20"
      zIndex="1"
      // alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      // justifyContent="flex-end"
      {...rest}
    >
    <IconButton
        // display="flex"
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

    <Text
        // display="flex"
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        LWB
      </Text>
    </Flex>
    );
}
