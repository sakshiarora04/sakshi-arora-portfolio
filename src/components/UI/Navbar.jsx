import { useState } from "react";
import {
  Flex,
  Button,
  Heading,
  useColorModeValue,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav({ links }) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        bg={useColorModeValue("back.100", "back.900")}
        wrap="wrap"
        padding="1.5rem"
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Flex align="center" mr={5}>
          <Heading
            w="100%"
            ml={6}
            size="lg"            
            fontWeight="semibold"
            color="purple.600"
          >
            SA
          </Heading>
        </Flex>
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          px={20}
          alignItems="center"
          
        >
          {links.map((link, i) => (
            <Button key={i} mt={{ base: 6, md: 0 }} mr={6} display="block">
              {link}
            </Button>
          ))}
        </Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </>
  );
}
