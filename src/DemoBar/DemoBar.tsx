import React from "react";
import ThemedButton from "../Common/Button/Button";
import "./DemoBar.css";

export const DemoBar = () => {
  return (
    <div className="DemoBar">
      <div className="DemoDescriptionBox">
        <h1>Get Dollhouse!</h1>
        <h3>Learn more about what we can do for you</h3>
      </div>
      <div className="DemoButtonBox">
        <ThemedButton
          variant="contained"
          styleOverride={{
            backgroundColor: "white",
            padding: "16px 32px",
            fontWeight: "600",
            color: "#A1BD69",
            maxHeight: "8vh",
          }}
        >
          Schedule a Demo with us!
        </ThemedButton>
      </div>
    </div>
  );
};
