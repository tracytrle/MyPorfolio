import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
import Resume from "../Components/Resume.js";

function ResumePage() {
  return (
    <Stack data-testid="stack-component" sx={{ minHeight: "100vh" }}>
      <Header />

      <Outlet />

      <Resume />

      <Footer />
    </Stack>
  );
}

export default ResumePage;
