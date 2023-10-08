// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Flex, VStack, Spacer } from "@chakra-ui/layout";
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL

  return (
    <>
      <VStack p={2} bg="back.900" color='white'>
        <Flex w="100%">
          
          <Spacer></Spacer>
      
          <Header />
         
          <Outlet />
          
         
          </Flex>
          <Footer />
     
      </VStack>
    </>
  );
}

export default App;
