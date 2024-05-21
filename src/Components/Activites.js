import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import data from "./tools.json";

function Activites() {
  return (
    <Box mt={2} mb={5}>
      {data.activities.map((activity) => (
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography>{activity.duration}</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>{activity.name}</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default Activites;
