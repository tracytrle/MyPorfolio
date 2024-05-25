import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import data from "./tools.json";

function WorkExperiences() {
  return (
    <Box mt={2} mb={2}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Typography>{data.works.duration}</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">{data.works.name}</Typography>
          <Typography style={{ fontStyle: "italic" }}>
            {data.works.position}
          </Typography>
          <Typography sx={{ mt: "1rem" }}>{data.works.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkExperiences;
