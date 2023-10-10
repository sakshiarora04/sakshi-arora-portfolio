// import required components from chakra
import {
  GridItem,
  Stack,
  Text,
  Link,
  Image,
  Button,
  CardBody,
  Heading,
  Divider,
  ButtonGroup,
  CardFooter,
  Card,
} from "@chakra-ui/react";
// get passed data (one project object from array of projects) with component ProjectDisplay and display that data on chakra cards
export default function ProjectDisplay({
  project: { title, image, description, deploy, github },
}) {
  return (
    <GridItem mb={10} overflowY="auto">
      <Card maxW="sm" w="500">
        <CardBody>
          <Image
            src={image}
            alt="Project"
            h="300"
            borderRadius="lg"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          />
          <Stack mt="6" spacing="3" h="170">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {/* button to give links to repo and deployed site */}
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <Link href={deploy}>Live</Link>
            </Button>
            <Button variant="solid" colorScheme="blue">
              <Link href={github}>Github</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
