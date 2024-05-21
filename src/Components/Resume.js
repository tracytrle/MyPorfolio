import React from "react";
import Tools from "./Tools.js";
import Education from "./Education.js";
import { Box, Typography, useMediaQuery } from "@mui/material";
import HorizontalLine from "./HorizontalLine.js";
import TechSkills from "./TechSkills.js";

function Resume() {
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  return (
    <Box
      sx={{
        ml: isLargeScreen ? "20rem" : "2rem",
        mr: isLargeScreen ? "5rem" : "0",
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
        <Typography variant="h5">TECHNICAL SKILLS</Typography>
        <HorizontalLine
          style={{
            borderTop: "2px solid #b2bec3",
            margin: "2px 0",
          }}
        />
        <TechSkills />
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
