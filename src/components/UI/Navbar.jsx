// import required components and icons from react and chakra
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
  // set state to toggle - show or hide small button while changing screen sizes
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  // set state to show light or dark
  const [isActive, setisActive] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();

  // set isActive to key value of clicked link
  const handleActive = (pageNo) => {
    setisActive(pageNo);
  };

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
            Sakshi Arora
          </Heading>
          {/* handle toggle on click show menu */}
          <Box
            display={{ base: "block", md: "none" }}
            ml={6}
            onClick={handleToggle}
          >
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
            {/* handle click on links and highlight selected */}
            {links.map((link, i) => (
              <Button
                key={i}
                color={isActive === i ? "purple.600" : ""}
                onClick={() => handleActive(i)}
                mt={{ base: 6, md: 0 }}
                mr={6}
                display="block"
              >
                {link}
              </Button>
            ))}
          </Box>
        </Flex>
        {/* toggle button to change mode from light to dark and vice versa */}
        <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </>
  );
}
