import React from 'react'
import NLink from "./NLink";

import {
    Box,
    CloseButton,
    Flex,
    Text,
} from "@chakra-ui/react";


  const LinkItems = [
      { label: "Home", href: "/" },
      { label: "Bio", href: "/bio" },
      { label: "Music", href: "/music" },
      { label: "Gallery", href: "/gallery" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
  ];

  export default function Sidebar({ onClose, ...rest }) {
      return (
        <Box
        transition="3s ease"
        bg="white"
        borderRight="1px"
        borderRightColor="gray.200"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          LWB Composer
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
        {LinkItems.map((link, i) => (
        <NLink key={i} link={link} />
      ))}
    </Box>
    );
  }