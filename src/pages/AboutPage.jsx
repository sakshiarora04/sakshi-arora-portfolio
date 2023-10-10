// This is a static page mocking an "About Us" section for our fake user data
import { Stack, Flex, Box, Text, Link } from "@chakra-ui/layout";

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

export default function AboutPage() {
  //  display image and short bio
  return (
    <Stack>
      <Flex direction={"row"} wrap="wrap" p="20" alignSelf="flex-center">
        <Box alignSelf="center" overflowY="auto" mx={10} my={16}>
          <Text fontSize="3xl">Welcome to my portfolio!</Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, blue.500, purple.600)"
            bgClip="text"
          >
            Sakshi Arora
          </Text>
          <Text width="90%">
            I am passionate and dedicated Full Stack Developer with a relentless
            pursuit of crafting innovative web solutions.
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => <Link href="/contact"></Link>}
          >
            Contact me
          </Button>
        </Box>
        {/* profile picture */}
        <Image
          alignSelf="center"
          mx={10}
          my={16}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="/assets/pp/pp.jpg"
        />
      </Flex>
    </Stack>
  );
}
