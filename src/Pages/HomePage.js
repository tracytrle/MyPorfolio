import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
import Splash from "../Layouts/Splash.js";

function Homepage() {
  return (
    <Stack data-testid="stack-component" sx={{ minHeight: "100vh" }}>
      <Header />

      <Outlet />

      <Splash />

      <Footer />
    </Stack>
  );
}

export default Homepage;
