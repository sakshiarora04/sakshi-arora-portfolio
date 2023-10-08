// This is a static page mocking an "About Us" section for our fake user data
import { Stack, Flex, Box, Text} from '@chakra-ui/layout';

import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';

export default function AboutPage() {
  
  return (
    <Stack>          
            <Flex direction={"row"}
            bg="back.700"
            wrap="wrap"
                spacing="300px" p="32"
                alignSelf="flex-center">
                <Box direction={"column"} ml={10}my={16} align='flex-start'>
                    <Text fontSize="3xl" >Welcome to my portfolio!</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, purple.400, blue.500, purple.600)" bgClip='text' >Sakshi Arora</Text>
                    <Text width="500px">
                    I am passionate and dedicated Full Stack Developer with a relentless pursuit of crafting innovative web solutions.
                      </Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        <a href='/contact'></a>
                    }>Contact me</Button>

                </Box>
                <Image direction={"column"} ml={20} alignSelf="center" my={16} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='' />
            </Flex>

        </Stack>
  );
}
