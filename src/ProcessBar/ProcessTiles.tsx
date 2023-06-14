import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import theme from "../Common/ThemeProvider";
import "./Process.css";
import { ExpandButton } from "../Common/Blocks/Buttons";
interface ProcessTileProps {
  process: string;
  image: JSX.Element;
  blurb: JSX.Element;
}
const ProcessTile = ({ process, image, blurb }: ProcessTileProps) => {
  const [isClicked, setIsClicked] = useState(false);

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
        <div
          style={{
            display: "flex",
            color: "gray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Learn More
          <ExpandButton
            color="primary"
            fontSize="large"
            transform={isClicked ? "rotate(0)" : "rotate(-90deg)"}
            onClick={() => setIsClicked(!isClicked)}
          />
        </div>
        <div hidden={!isClicked}>{blurb}</div>
      </CardContent>
    </Card>
  );
};
export default ProcessTile;
