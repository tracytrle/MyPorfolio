import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import Web from "@mui/icons-material/Web";
import { Box, Typography, useMediaQuery, Grid, Link } from "@mui/material";

function ProjectItem(props) {
  const { project } = props;

  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  return (
    <Box
      sx={{
        ml: isLargeScreen ? "5rem" : "2rem",
        mr: isLargeScreen ? "5rem" : "2rem",
        justifyContent: "center",
        mt: "2rem",
      }}
    >
      {/* <Typography variant="h3">Projects</Typography> */}
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h4">{project.name}</Typography>
            <Typography variant="h6" sx={{ mt: "5px" }}>
              {project.description}
            </Typography>
            <Box display="flex" mt={2}>
              <GitHubIcon />
              <Typography ml={2}>
                <Link
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "blue" }}
                >
                  {project.repoLink}
                </Link>
              </Typography>
            </Box>
            {project.link && (
              <Box display="flex">
                <Web />
                <Typography ml={2}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "blue" }}
                  >
                    {project.link}
                  </Link>
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={6} md={4}>
            <Box
              sx={{
                width: "120%", // Adjust width to fill the grid item
                height: "350px", // Adjust the height as needed
                backgroundImage: `url(${project.imageUrl})`, // Replace with the path to your image
                backgroundSize: "cover",
                backgroundPosition: "center",
                ml: "30px",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProjectItem;
