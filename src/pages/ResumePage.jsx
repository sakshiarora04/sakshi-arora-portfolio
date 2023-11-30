import {
  Grid,
  GridItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
// import download icon
import { BsCloudDownloadFill } from "react-icons/bs";
import resume from "/assets/resume/SAKSHIARORA-Resume.pdf";

export default function ResumePage() {
  // skill set
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
      {/* download resume button */}
      <GridItem mb={10} overflowY="auto">
        <a href={resume} download="sakshi_arora.pdf">
          <Button variant="solid" colorScheme="blue" m={10}>
            <BsCloudDownloadFill style={{ margin: "20px", height: "20px" }} />
            Download my resume
          </Button>
        </a>

        <p>Please feel free to check out my list of Developer Proficiencies!</p>
      </GridItem>
      {/* list frontend and backend Proficiencies */}
      <GridItem mb={10} overflowY="auto">
        <Card maxW="sm" w="500" h="380">
          <CardHeader fontWeight="bold" fontSize="1.5rem">
            Front-end Proficiencies
          </CardHeader>
          <CardBody>
            <UnorderedList>
              {frontEndSkills.map((skill, i) => (
                <ListItem key={i}>{skill}</ListItem>
              ))}
            </UnorderedList>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem mb={10} overflowY="auto">
        <Card maxW="sm" w="500" h="380">
          <CardHeader fontWeight="bold" fontSize="1.5rem">
            Back-end Proficiencies
          </CardHeader>
          <CardBody>
            <UnorderedList>
              {backEndSkills.map((skill, i) => (
                <ListItem key={i}>{skill}</ListItem>
              ))}
            </UnorderedList>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}
