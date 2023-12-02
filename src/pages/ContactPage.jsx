// import required components
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
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  const form = useRef();
  // set state to empty all fields
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const type = e.target.name;
    const value = e.target.value;
    // set value of selected field
    if (type === "email" || type === "name" || type === "message") {
      setFormState({ ...formState, [type]: value });
    }
  };

  const handleInputOnFocusOut = (e) => {
    const type = e.target.name;
    const value = e.target.value;
    // check if field left empty and email is invalid and set errormessage
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
    emailjs
      .sendForm(
        "service_bp3hoor",
        "template_7kwqxyx",
        form.current,
        "6actgrNzAA-y9pHbP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // if no error message then submit successfully
    if (!errorMessage) {
      setErrorMessage("Thank you for your feedback");
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
            <p className="feedback">I would love to hear your feedback</p>
          </Box>
          <Box my={4} w={[200, 300, 400]} textAlign="left">
            <form
            ref={form}
              action="https://formsubmit.co/your@.com"
              className="form"
              onSubmit={handleFormSubmit}
            >
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
                  placeholder="Type your message here"
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
