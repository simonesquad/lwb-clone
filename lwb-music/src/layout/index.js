import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
    Box,
    Drawer,
    DrawerContent,
    IconButton,
    useDisclosure,
    useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box minH="100vh" bg="gray.100">
            <Sidebar 
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <Sidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <Header 
                onOpen={onOpen}
                display={{ md: "none"}}
            >
            </Header>
            <Box ml={{ base: 0, md: 60 }} p="1">
                <IconButton 
                        icon={ colorMode === 'light' ? <FaSun /> : <FaMoon />}
                        isRound='true'
                        size='lg'
                        alignSelf='flex-end'
                        onClick={toggleColorMode}
                    />
                {children}
            </Box>  
        </Box>
    );
}