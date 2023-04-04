import React from "react";
import ThemedButton from "../Common/Button/Button";
import "./HiringBar.css";

export const HiringBar = () => {
  return (
    <div className="HiringBar">
      <div className="HiringButtonBox">
        <h1>Come Work With Us!</h1>
        <ThemedButton
          variant="contained"
          styleOverride={{
            backgroundColor: "#A1BD69",
            padding: "16px 32px",
            fontWeight: "600",
            color: "white",
            maxHeight: "8vh",
          }}
        >
          Join the Team
        </ThemedButton>
      </div>
      <div className="HiringDescriptionBox">
        <h1>Come Work With Us!</h1>
        <h3>Advance Your Career and Have Fun</h3>
      </div>
    </div>
  );
};
