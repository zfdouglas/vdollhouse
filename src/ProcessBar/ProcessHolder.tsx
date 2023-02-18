import React from "react";
import ProcessTile from "./ProcessTiles";

import theme from "../Common/ThemeProvider";
import { processes } from "../Copy/processes";
import { ContentBar } from "../Common/Blocks/ContentBar";

const ProcessHolder = () => {
  return (
    <ContentBar
      header="The Process"
      headerColor={theme.palette.primary.main}
      backgroundColor="none"
    >
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
    </ContentBar>
  );
};
export default ProcessHolder;
