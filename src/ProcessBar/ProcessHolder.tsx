import React from "react";
import ProcessTile from "./ProcessTiles";

import theme from "../Common/ThemeProvider";
import { processes } from "../Copy/processes";

const ProcessHolder = () => {
  return (
    <div>
      <h1 style={{ color: theme.palette.primary.main }}>The Process</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {processes.map((step) => {
          return (
            <ProcessTile
              process={step.process}
              image={step.image}
              blurb={step.blurb}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProcessHolder;
