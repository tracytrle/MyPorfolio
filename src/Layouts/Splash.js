import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";

const items = ["Resume", "Projects", "Contact"];
const colors = ["#fdcb6e", "#74b9ff", "#55efc4"];

function Splash() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{ justifyContent: "center", display: "flex", flexDirection: "row" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "500px", // Adjust width to fill the grid item
              height: "500px", // Adjust the height as needed
              backgroundImage: "url(/truc-avatar.jpg)", // Replace with the path to your image
              backgroundSize: "cover",
              backgroundPosition: "auto",
              borderRadius: "50%", // Makes the box round
              marginTop: "4rem",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: "8rem" }}>
            <Typography
              sx={{ mt: 1.5, fontFamily: "initial", fontSize: "5rem" }}
              variant="h2"
            >
              Hello!
            </Typography>
            <Typography
              sx={{ mt: 1.5, fontFamily: "monospace", fontSize: "1.2rem" }}
              variant="h5"
            >
              I graduated from the University of Texas at Austin with a major in
              Computer Science. I am an industrious and enthusiastic person.
            </Typography>
            <Box
              sx={{
                mt: "2rem",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}
            >
              {items.map((item, index) => (
                <Button
                  sx={{
                    width: "100px", // Adjust width to fill the grid item
                    height: "100px", // Adjust the height as needed
                    backgroundColor: colors[index], // Replace with the path to your image
                    backgroundSize: "cover",
                    backgroundPosition: "auto",
                    borderRadius: "50%", // Makes the box round
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#747d8c",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    navigate(`/${item}`);
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Splash;
