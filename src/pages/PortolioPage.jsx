import { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL

import ProjectDisplay from "../components/UI/ProjectDetails/ProjectDisplay";
import ProjectList from "../components/UI/ProjectDetails/ProjectList";
export default function ProfilePage() {
 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectList());   
  }, []);

  return (
    <Grid templateColumns={{ lg:"repeat(3, 1fr)",md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }} gap={5} my={40} mx={20}  >
      {projects.map((project, i) => (
        <ProjectDisplay key={i} project={project} />
      ))}
    </Grid>
  );
}
