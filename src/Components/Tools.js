import React from "react";
import data from "./tools.json";
import { Grid, styled } from "@mui/material";
import { Item } from "./Item";

const MemberPhoto = styled("img")({
  padding: "0px 0px",
  width: "100px", // Set the desired width
  height: "80px",
});

function Tools() {
  return (
    <Grid container spacing={2} data-testid="tools-used-component">
      {data.tools.map((t) => (
        <Grid item xs={3} sm={4} md={2} xl={1} key={t.link}>
          <Item sx={{ display: "flex", flexDirection: "column" }}>
            <MemberPhoto src={t.imgLink} />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}

export default Tools;
