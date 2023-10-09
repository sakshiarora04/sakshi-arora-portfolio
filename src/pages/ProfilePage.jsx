import { useState, useEffect } from "react";
import { Grid, Card, Container } from "@chakra-ui/react";
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
// import { useParams, Link } from 'react-router-dom';
import ProjectDisplay from "../components/UI/ProjectDetails/ProjectDisplay";

export default function ProfilePage() {
  const allProjects = [
    {
      title: "Your Recipe Book",
      image: "./assets/images/recipe.jpg",
      description:" User can create recipes, add to favourites and check recipes in details including number of likes and comments by users. They can also increase like, add their comments and check latest recipes.",
      deploy: "https://your-recipe-book-985222554f68.herokuapp.com/",
      github: "https://github.com/sakshiarora04/your-recipe-book",
    },
    {
      title: "Just Movie",
      image: "./assets/images/just-movie.jpg",
      description:"This application builds a website displaying a range of movies in conjunction with their ratings and reviews, enabling users to search for movies by title or through a series of categories including genre.",
      deploy: "https://sakshiarora04.github.io/just-movie/",
      github: "https://github.com/sakshiarora04/just-movie",
    },
    {
      title: "Tech Blog",
      image: "./assets/images/tech.jpg",
      description:"A CMS style blog site, which allows users to publish their blog posts and comment on other that other user's blog post.",
      deploy: "https://tech-blogpost-6c7d5895dab3.herokuapp.com/ ",
      github: "https://github.com/sakshiarora04/tech-blog",
    },
    {
      title: "Tech Blog",
      image: "./assets/images/tech.jpg",
      description:"A CMS style blog site, which allows users to publish their blog posts and comment on other that other user's blog post.",
      deploy: "https://tech-blogpost-6c7d5895dab3.herokuapp.com/ ",
      github: "https://github.com/sakshiarora04/tech-blog",
    },
    {
      title: "Tech Blog",
      image: "./assets/images/tech.jpg",
      description:"A CMS style blog site, which allows users to publish their blog posts and comment on other that other user's blog post.",
      deploy: "https://tech-blogpost-6c7d5895dab3.herokuapp.com/ ",
      github: "https://github.com/sakshiarora04/tech-blog",
    },
    {
      title: "Tech Blog",
      image: "./assets/images/tech.jpg",
      description:"A CMS style blog site, which allows users to publish their blog posts and comment on other that other user's blog post.",
      deploy: "https://tech-blogpost-6c7d5895dab3.herokuapp.com/ ",
      github: "https://github.com/sakshiarora04/tech-blog",
    },
  ];
  const [projects, setProjects] = useState([]);

  //   const fetchData = async () => {
  //     // const { data } = await API.getSingleUser(id);
  // console.log(projects)
  //     setProjects(allProjects);
  //   };

  useEffect(() => {
    setProjects(allProjects);
    console.log(projects);
  }, []);

  return (
    <Grid templateColumns={{ lg:"repeat(3, 1fr)",md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }} gap={5} my={40} mx={20}  >
      {projects.map((project, i) => (
        <ProjectDisplay key={i} project={project} />
      ))}
    </Grid>
  );
}
