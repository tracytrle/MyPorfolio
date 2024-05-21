import React from "react";
import { Link, Typography, Grid, Box, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HorizontalLine from "../Components/HorizontalLine";

function MainFooter() {
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  return (
    <Box
      sx={{
        mt: "10rem",
        ml: isLargeScreen ? "10rem" : "0",
        mr: isLargeScreen ? "10rem" : "0",
      }}
    >
      <HorizontalLine
        style={{
          borderTop: "2px solid #b2bec3",
          margin: "2px 0",
        }}
      />

      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  justifyContent: "space-center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    mt: "2rem",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10rem",
                  }}
                >
                  <Box>
                    <EmailIcon />
                    <Typography>tracytrle@gmail.com</Typography>
                  </Box>
                  <Box>
                    <PhoneIcon />
                    <Typography>(734)-353-3081</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: "2rem",
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "auto",
                }}
              >
                <Box>
                  <Typography variant="h5">Follow Me</Typography>
                  <Box sx={{ gap: "2rem" }}>
                    <LinkedInIcon />
                    <GitHubIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              p={1}
              marginBottom={0}
            >
              {"Copyright © "}
              <Link color="inherit">TracyTran</Link> {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainFooter;
