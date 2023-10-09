import { IconButton, Flex, Stack, ButtonGroup } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const guthubLink = () => {
    <Link to="/https://github.com/sakshiarora04/sakshi-arora-portfolio"></Link>;
  };
  return (
    <Flex  as="footer" justify="center" height="50px" mt={20}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="tertiary">
            <IconButton
            
              as=""
              fontSize='30px'
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as=""
              fontSize='30px'
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              fontSize='30px'
              aria-label="Twitter"
              icon={<FaTwitter />}
              onClick={guthubLink}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Flex>
  );
}
