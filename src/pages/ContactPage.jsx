import {
  Grid,
  Flex,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";
export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const type = e.target.name;
    const value = e.target.value;

    if (type === "email" || type === "name" || type === "message") {
      setFormState({ ...formState, [type]: value });
    }
  };
  const handleInputOnFocusOut = (e) => {
    const type = e.target.name;
    const value = e.target.value;

    console.log(type, value, !validateEmail(value));

    if (type === "name" && !value) {
      setErrorMessage("Please enter name");
    } else if (type === "email" && !validateEmail(value)) {
      setErrorMessage("Please enter valid email address");
    } else if (type === "message" && !value) {
      setErrorMessage("Message is required");
    } else {
      setErrorMessage("");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("submitted successfully", formState);
      setFormState({ name: "", email: "", message: "" });
    } else {
      setErrorMessage("Please enter required fields");
    }
   
  };

  return (
    <Grid
      templateColumns="repeat(1, 1fr)"
      w="70%"
      my={40}
      mx={10}
      alignSelf="center"
    >
      <Flex width="auto" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Contact Me</Heading>
          </Box>
          <Box my={4} w={[200, 300, 400]} textAlign="left">
            <form className="form"  onSubmit={handleFormSubmit}>
              <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInput}
                  onBlur={handleInputOnFocusOut}
                  placeholder="John Doe"
                />
                <FormLabel mt={6}>Email:</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInput}
                  onBlur={handleInputOnFocusOut}
                  placeholder="test@test.com"
                />
                <FormLabel mt={6}>Message:</FormLabel>
                <Input
                  type="text"
                  name="message"
                  value={formState.message}
                  onChange={handleInput}
                  onBlur={handleInputOnFocusOut}
                  placeholder=""
                />
              </FormControl>
              <FormControl mt={6}>
                {errorMessage && (
                  <div>
                    <p>{errorMessage}</p>
                  </div>
                )}
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Grid>
  );
}
