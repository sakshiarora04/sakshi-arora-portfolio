import { IconButton, Flex, Stack, ButtonGroup } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex as="footer" justify="center" height="50px" mt={20}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="tertiary">
            <IconButton
              as=""
              fontSize="30px"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sakshi-arora-624959177/",
                  "_blank"
                )
              }
            />
            <IconButton
              as=""
              fontSize="30px"
              aria-label="GitHub"
              icon={<FaGithub />}
              onClick={() =>
                window.open("https://github.com/sakshiarora04", "_blank")
              }
            />
            <IconButton
              as="a"
              fontSize="30px"
              aria-label="Twitter"
              icon={<FaTwitter />}
              onClick={() =>
                window.open("https://x.com/mesakshiarora16?s=11", "_blank")
              }
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Flex>
  );
}
