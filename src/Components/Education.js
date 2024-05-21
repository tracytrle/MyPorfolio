import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import data from "./tools.json";

function Education() {
  return (
    <Box mt={2} mb={2}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">{data.education.year}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">{data.education.school}</Typography>
          <Typography variant="h6">{data.education.degree}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">Relevant Courseworks </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">{data.education.courseworks}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
