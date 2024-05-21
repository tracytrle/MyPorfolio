import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/PhoneAndroid";
import LocationIcon from "@mui/icons-material/LocationCity";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";

function ContactInfo() {
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  return (
    <Box
      sx={{
        mt: "-3rem",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(/contact.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backdropFilter: "blur(2px)", // Adjust the blur value as needed
          zIndex: 1,
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      <Box
        sx={{
          ml: isLargeScreen ? "20rem" : "2rem",
          mr: isLargeScreen ? "5rem" : "0",
          mt: "5rem",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Contact me</Typography>
        <Box display="flex" mt={2}>
          <PhoneIcon />
          <Typography ml={2} fontSize={"1.2rem"}>
            (734) 353- 3081{" "}
          </Typography>
        </Box>
        <Box display="flex" mt={2}>
          <LocationIcon />
          <Typography ml={2} fontSize={"1.2rem"}>
            Round Rock, Texas
          </Typography>
        </Box>
        <Box display="flex" mt={2}>
          <EmailIcon />
          <Typography ml={2} fontSize={"1.2rem"}>
            tracytrle@gmail.com{" "}
          </Typography>
          <Typography ml={2} fontSize={"1.2rem"}>
            /tructran@utexas.edu
          </Typography>
        </Box>
        <Box display="flex" mt={2}>
          <GitHubIcon />
          <Typography ml={2} fontSize={"1.2rem"}>
            <Link
              href="https://github.com/tracytrle"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "blue" }}
            >
              https://github.com/tracytrle
            </Link>
          </Typography>
        </Box>
        <Box display="flex" mt={2}>
          <LinkedInIcon />
          <Typography ml={2} fontSize={"1.2rem"}>
            <Link
              href="https://www.linkedin.com/in/tracytrle/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "blue" }}
            >
              https://www.linkedin.com/in/tracytrle/
            </Link>
          </Typography>
        </Box>
        <Box display="flex" mt={2}></Box>
      </Box>
    </Box>
  );
}

export default ContactInfo;
