// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Flex, Stack, Spacer } from "@chakra-ui/layout";
// //  import `ChakraProvider` component
import { ChakraProvider, GridItem } from "@chakra-ui/react";
import { theme } from "./styles/theme.jsx";
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL

  return (
    <ChakraProvider theme={theme}>
      <Stack  w="100%" minHeight="100vh">
        <Header />
        
        <GridItem bg="back.900" area={"main"} h="auto" >
          <Outlet />
        </GridItem>

        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
