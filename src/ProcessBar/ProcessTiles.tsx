import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import theme from "../Common/ThemeProvider";
import "./Process.css";
interface ProcessTileProps {
  process: string;
  image: JSX.Element;
  blurb: JSX.Element;
}
const ProcessTile = ({ process, image, blurb }: ProcessTileProps) => {
  return (
    <Card
      elevation={1}
      sx={{
        width: { xs: "80%", lg: "17%" },
        marginTop: "1em",
      }}
    >
      <CardContent>
        <Typography
          component="div"
          color={theme.palette.primary.main}
          gutterBottom
        >
          <p className="ProcessTitle">{process}</p>
        </Typography>
        <CardMedia
          className="ProcessIcon"
          sx={{ height: "8vh", marginBottom: "4vh" }}
          title={process}
        >
          {image}
        </CardMedia>
        <div>{blurb}</div>
      </CardContent>
    </Card>
  );
};
export default ProcessTile;
