import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

import Header from "../Layouts/Header.js";

import ContactInfo from "../Components/ContactInfo.js";

function ContactPage() {
  return (
    <Stack data-testid="stack-component" sx={{ minHeight: "100vh" }}>
      <Header />

      <Outlet />

      <ContactInfo />
    </Stack>
  );
}

export default ContactPage;
