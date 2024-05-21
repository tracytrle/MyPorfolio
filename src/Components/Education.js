import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import data from "./tools.json";

function Education() {
  return (
    <Box mt={2} mb={2}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Typography>{data.education.year}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography>{data.education.school}</Typography>
          <Typography>{data.education.degree}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6} md={4}>
          <Typography>Relevant Courseworks </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography>{data.education.courseworks}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
