import React from "react";
import data from "./tools.json";
import ProjectItem from "./ProjectItem";
import { Box, Typography, useMediaQuery } from "@mui/material";

function Projects() {
  const isLargeScreen = useMediaQuery("(min-width:1024px)");

  return (
    <Box
      sx={{
        ml: isLargeScreen ? "20rem" : "2rem",
        mr: isLargeScreen ? "5rem" : "2rem",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Projects</Typography>
      {data.projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </Box>
  );
}

export default Projects;
