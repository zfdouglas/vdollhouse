import React from "react";
import ProcessTile from "./ProcessTiles";

const ProcessHolder = () => {
  const processes = [
    {
      process: "Take a Picture",
      image: <></>,
      blurb: "Use your phone",
    },
    {
      process: "Take a Picture",
      image: <></>,
      blurb: "Use your phone",
    },
    {
      process: "Take a Picture",
      image: <></>,
      blurb: "Use your phone",
    },
  ];
  return (
    <div>
      <h2>The Process</h2>
      <div style={{ display: "flex", flexDirection: "row", margin: "auto" }}>
        <ProcessTile
          process="Take a Picture"
          image={<></>}
          blurb="Use Your Phone"
        />
      </div>
    </div>
  );
};
export default ProcessHolder;
