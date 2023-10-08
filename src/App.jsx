// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL

  return (
    <>
      <VStack p={5} bg="back.900" color='white'>
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="purple.400">
            Sakshi Arora
          </Heading>
          <Spacer></Spacer>
          <Nav />
          <Outlet />
          
        </Flex>
      </VStack>
    </>
  );
}

export default App;
