import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import theme from "../Common/ThemeProvider";

interface ProcessTileProps {
  process: string;
  image: JSX.Element;
  blurb: string;
}
const ProcessTile = ({ process, image, blurb }: ProcessTileProps) => {
  return (
    <Card sx={{ maxWidth: "17%" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          color={theme.palette.primary.main}
          gutterBottom
        >
          {process}
        </Typography>
        <CardMedia sx={{ height: "60%" }} title="green iguana">
          {image}
        </CardMedia>
        <div>{blurb}</div>
      </CardContent>
    </Card>
  );
};
export default ProcessTile;
