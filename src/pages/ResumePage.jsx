import {
  Grid,
  GridItem,
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { BsCloudDownloadFill } from "react-icons/bs";
import resume from "/assets/resume/SAKSHI_ARORA_Resume.pdf";

export default function ResumePage() {
    const frontEndSkills = [
        "CSS",
        "JavaScript",
        "JQuery",
        "Responsive Design",
        "React",
        "Bootstrap",
        "Chakra UI",
    ];
    const backEndSkills = [
        "API's",
        "Node",
        "Express",
        "MySQL",
        "Sequelize",
        "MongoDB",
        "Mongoose",
        "Bootstrap",
        "REST",
        "GraphQL",
    ];
  return (
    <Grid
      templateColumns={{
        lg: "repeat(3, 1fr)",
        md: "repeat(2, 1fr)",
        base: "repeat(1, 1fr)",
      }}
      gap={5}
      my={40}
      mx={20}
    >
      <GridItem bg="back.800" mb={10} overflowY="auto">
        <Button variant="solid" colorScheme="blue" m={10}>
          <Link href={resume}>
            <BsCloudDownloadFill
              style={{ width: "100px", height: "20px", marginLeft: "30px" }}
            />{" "}
            Download my resume
          </Link>
        </Button>
        <p>Please feel free to check out my list of Developer Proficiencies!</p>
      </GridItem>
      <GridItem bg="back.800" mb={10} overflowY="auto">
        <Card maxW="sm" w="500" h="350">
          <CardHeader fontWeight="bold" fontSize="1.5rem">Front-end Proficiencies</CardHeader>
          <CardBody>
            <UnorderedList>
              {frontEndSkills.map((skill, i) => (
                <ListItem key={i} >{skill}</ListItem>
              ))}
            </UnorderedList>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem bg="back.800" mb={10} overflowY="auto">
        <Card maxW="sm" w="500" h="350">
          <CardHeader fontWeight="bold" fontSize="1.5rem">Back-end Proficiencies</CardHeader>
          <CardBody><UnorderedList>
              {backEndSkills.map((skill, i) => (
                <ListItem key={i} >{skill}</ListItem>
              ))}
            </UnorderedList></CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}
