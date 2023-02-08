import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InteriorShot from "../Common/assets/interior.jpg";

const HeroBanner = () => {
  const paperStyling = {
    position: "relative",
    color: "#fff",
    mb: 4,
    height: "40vh",
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
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              vDollHouse
            </Typography>
            <Typography variant="h5" color="contrast" paragraph>
              Your home, visualized
            </Typography>
            <Link variant="subtitle1" href="#">
              Learn More
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default HeroBanner;
