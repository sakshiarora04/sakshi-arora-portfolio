// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import { Stack } from "@chakra-ui/layout";
// //  import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme.jsx";
function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  // chakra provider to wrap whole app and applied theme
  return (
    <ChakraProvider theme={theme}>
      <Stack w="100%" minHeight="100vh">
        <Header />
        <Outlet />
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
