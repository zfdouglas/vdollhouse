import React from "react";
import ProcessTile from "./ProcessTiles";

import theme from "../Common/ThemeProvider";
import "./Process.css";
import { processes } from "../Copy/processes";
import { ContentBar } from "../Common/Blocks/ContentBar";

const ProcessHolder = () => {
  return (
    <ContentBar
      header="THE PROCESS"
      headerColor={theme.palette.primary.main}
      backgroundColor="none"
    >
      <div className="ProcessTile">
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
