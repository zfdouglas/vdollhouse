import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InteriorShot from "../Common/assets/interior.jpg";

const HeroBanner = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        mb: 4,
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${InteriorShot})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.1)",
        }}
      />
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
            <Typography variant="h5" color="inherit" paragraph>
              Yeah, we here
            </Typography>
            <Link variant="subtitle1" href="#">
              this doesn't go anywhere
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default HeroBanner;
