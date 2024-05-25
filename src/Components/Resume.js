import React from "react";
import Tools from "./Tools.js";
import Education from "./Education.js";
import { Box, Typography, useMediaQuery } from "@mui/material";
import HorizontalLine from "./HorizontalLine.js";
import TechSkills from "./TechSkills.js";
import Activites from "./Activites.js";
import WorkExperiences from "./WorkExperiences.js";

function Resume() {
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  return (
    <Box
      sx={{
        ml: isLargeScreen ? "10rem" : "2rem",
        mr: isLargeScreen ? "10rem" : "2rem",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Resume</Typography>
      <Box mt={4}>
        <Typography variant="h5">EDUCATION</Typography>
        <HorizontalLine
          style={{
            borderTop: "2px solid #b2bec3",
            margin: "2px 0",
          }}
        />
        <Education />
        <Typography variant="h5">WORK EXPERIENCE</Typography>
        <HorizontalLine
          style={{
            borderTop: "2px solid #b2bec3",
            margin: "2px 0",
          }}
        />
        <WorkExperiences />
        <Typography variant="h5">TECHNICAL SKILLS</Typography>
        <HorizontalLine
          style={{
            borderTop: "2px solid #b2bec3",
            margin: "2px 0",
          }}
        />
        <TechSkills />
        <Typography variant="h5">CAMPUS INVOLVEMENT</Typography>
        <HorizontalLine
          style={{
            borderTop: "2px solid #b2bec3",
            margin: "2px 0",
          }}
        />
        <Activites />
        <HorizontalLine
          style={{
            borderTop: "2px solid #b2bec3",
            margin: "2px 0",
          }}
        />
        <Tools />
      </Box>
    </Box>
  );
}

export default Resume;
