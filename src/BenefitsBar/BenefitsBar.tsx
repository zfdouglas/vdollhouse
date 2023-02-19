import Button from "@mui/material/Button";
import theme from "../Common/ThemeProvider";
import React, { useState } from "react";
import ThemedButton from "../Common/Button/Button";
import Paper from "@mui/material/Paper";
import { benefits } from "../Copy/benefits";
import { minHeight } from "@mui/system";
import { ContentBar } from "../Common/Blocks/ContentBar";
const BenefitsBar = () => {
  const [chosenBenefit, setChosenBenefit] = useState(benefits[0]);

  const buttonOverrideStyle = {
    backgroundColor: "#A1BD69",
    padding: "8px 16px",
    fontWeight: "500",
    color: "white",
  };
  return (
    <ContentBar header="Benefits" headerColor="#A1BD69" backgroundColor="white">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "70%",
          margin: "auto",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {benefits.map((person, index) => {
          return (
            <ThemedButton
              variant="contained"
              styleOverride={buttonOverrideStyle}
              active={chosenBenefit.title === person.title ? true : false}
              onClick={() => setChosenBenefit(benefits[index])}
            >
              {person.title}
            </ThemedButton>
          );
        })}
      </div>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "none",
          width: "60%",
          margin: "1% auto",
          minHeight: "25vh",
        }}
      >
        <p
          dangerouslySetInnerHTML={{ __html: chosenBenefit.content }}
          style={{ textAlign: "left", padding: "4%" }}
        />
      </Paper>
    </ContentBar>
  );
};
export default BenefitsBar;
