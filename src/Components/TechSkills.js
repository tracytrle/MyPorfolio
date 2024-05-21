import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import data from "./tools.json";

function TechSkills() {
  return (
    <Box mt={2} mb={2}>
      <Grid container spacing={2} sx={{ fontSize: "3rem" }}>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">Languages</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">{data.education.languages}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">Tools/Frameworks </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">{data.education.frameworks}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">Platform </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">{data.education.platform}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TechSkills;
