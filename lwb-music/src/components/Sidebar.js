import {
    Box,
    CloseButton,
    Flex,
    Text,
} from "@chakra-ui/react";
import {
    FiHome,
    FiCircle,
    FiMusic,
    FiStar,
    FiBookmark,
    FiSend,
  } from "react-icons/fi";
  import NavLink from "./NavLink";

  const LinkItems = [
      { label: "Home", icon: FiHome, href: "/" },
      { label: "Bio", icon: FiCircle, href: "/bio" },
      { label: "Music", icon: FiMusic, href: "/music" },
      { label: "Gallery", icon: FiStar, href: "/gallery" },
      { label: "Resources", icon: FiBookmark, href: "/resources" },
      { label: "Contact", icon: FiSend, href: "/contact" },
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
          Some Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
        {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
    </Box>
    );
  }