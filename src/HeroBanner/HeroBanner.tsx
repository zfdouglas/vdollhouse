import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InteriorShot from "../Common/assets/interior.jpg";

const HeroBanner = () => {
  const paperStyling = {
    position: "relative",
    color: "#fff",
    mb: 4,
    height: "66vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${InteriorShot})`,
  };

  const heroBoxStyling = {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.1)",
  };

  return (
    <Paper sx={paperStyling}>
      <Box sx={heroBoxStyling} />
      <Grid container></Grid>
    </Paper>
  );
};
export default HeroBanner;
