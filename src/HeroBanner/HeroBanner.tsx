import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InteriorShot from "../Common/assets/interior.jpg";

interface HeroBannerProps {
  backgroundImage?: string;
  height?: string;
  children?: React.ReactElement;
}
const HeroBanner = (props: HeroBannerProps) => {
  const paperStyling = {
    width: "100%",
    color: "#fff",
    mb: 4,
    height: props.height ? props.height : "66vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: props.backgroundImage
      ? `url(${props.backgroundImage})`
      : `url(${InteriorShot})`,
  };

  return (
    <Paper sx={paperStyling}>
      <Grid container height="100%">
        {props.children}
      </Grid>
    </Paper>
  );
};
export default HeroBanner;
