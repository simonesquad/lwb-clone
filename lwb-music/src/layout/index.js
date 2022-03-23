import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
    Box,
    Drawer,
    DrawerContent,
    useDisclosure
} from "@chakra-ui/react";

export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

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

            {/**place for the default menu is now here instead of original App.js file */}
            <Header onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="1">
                {children}
            </Box>  
        </Box>
    );
}