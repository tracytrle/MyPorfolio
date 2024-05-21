import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
import Projects from "../Components/Projects.js";

function ProjectPage() {
  return (
    <Stack data-testid="stack-component" sx={{ minHeight: "100vh" }}>
      <Header />

      <Outlet />

      <Projects />

      <Footer />
    </Stack>
  );
}

export default ProjectPage;
