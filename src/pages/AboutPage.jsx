// This is a static page mocking an "About Us" section for our fake user data
import { Box, Text, Link,Grid,GridItem } from "@chakra-ui/layout";

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

export default function AboutPage() {
  //  display image and short bio
  return (
    <Grid
      templateColumns={{        
        md: "repeat(2, 1fr)",
        base: "repeat(1, 1fr)",
      }}
      gap={5}
      my={40}
      mx={40}
      width="70%"
      alignSelf="center"
    >
    {/* <Flex direction={"row"} wrap="wrap" p="20"  justifyContent="flex-start"> */}
      <GridItem>
        <Box direction={"column"} alignSelf="center" overflowY="auto" mx={10} my={16}>
          <Text fontSize="3xl">Welcome to my portfolio!</Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, blue.500, purple.600)"
            bgClip="text"
          >
            Sakshi Arora
          </Text>
          <Text>
            I am passionate and dedicated Full Stack Developer based in Sydney. I am enterprise level web application developer with a relentless
            pursuit of crafting innovative solutions.
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => <Link href="/contact"></Link>}
          >
            Contact me
          </Button>
        </Box>
        </GridItem>
        {/* profile picture */}
        <GridItem>
        <Image direction={"column"}
          alignSelf="center"
          mx={10}
          my={16}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="/assets/pp/pp.jpg"
        />
        </GridItem>
      </Grid>
      
    
  );
}
