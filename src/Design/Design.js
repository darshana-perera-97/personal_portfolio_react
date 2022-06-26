import React from "react";
import Details from "./Details/Details";
import Menu from "./Menu/Menu";

import Grid from "@mui/material/Grid";

export default function Design() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4} lg={3}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9}>
          <Details />
        </Grid>
      </Grid>
    </div>
  );
}
