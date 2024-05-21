import React from "react";
import data from "./tools.json";
import { Grid, Link, styled } from "@mui/material";
import { Item } from "./Item";

const MemberPhoto = styled("img")({
  padding: "2px 0px",
});

function Tools() {
  return (
    <Grid container spacing={2} data-testid="tools-used-component">
      {data.tools.map((t) => (
        <Grid item xs={3} sm={2} md={2} key={t.link}>
          <Item sx={{ display: "flex", flexDirection: "column" }}>
            <MemberPhoto src={t.imgLink} />
            <Link href={t.link}>{t.name}</Link>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}

export default Tools;
