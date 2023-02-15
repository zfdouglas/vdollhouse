import theme from "../Common/ThemeProvider";
import React from "react";
const BenefitsBar = () => {
  return (
    <div style={{ backgroundColor: "#E5F6DF", marginTop: "3%" }}>
      <h1 style={{ color: theme.palette.primary.main, paddingTop: "3%" }}>
        Benefits
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      ></div>
    </div>
  );
};
export default BenefitsBar;
