import Button from "@mui/material/Button";
import theme from "../Common/ThemeProvider";
import React, { useState } from "react";
import "./BenefitsBar.css";
import ThemedButton from "../Common/Button/Button";
import Paper from "@mui/material/Paper";
import { ContentBar } from "../Common/Blocks/ContentBar";
import { benefits } from "../Copy/benefits";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const BenefitsBar = () => {
  const [chosenBenefit, setChosenBenefit] = useState(benefits[0]);

  return (
    <ContentBar
      header="THE BENEFITS"
      headerColor="white"
      backgroundColor="#A1BD69"
    >
      <div className="benefitButtonSelector">
        {benefits.map((person, index) => {
          return (
            <ThemedButton
              variant="contained"
              active={chosenBenefit.title === person.title ? true : false}
              onClick={() => setChosenBenefit(benefits[index])}
            >
              <div style={{ fontWeight: "600" }}>{person.title}</div>
            </ThemedButton>
          );
        })}
      </div>
      <div className="benefitDropdownSelector">
        <FormControl fullWidth>
          <InputLabel id="benefitSelect">Benefits:</InputLabel>
          <Select
            labelId="benefitSelect"
            id="benefitSelect"
            value={0}
            label="Benefit For:"
            onChange={(e) => setChosenBenefit(benefits[Number(e.target.value)])}
          >
            {benefits.map((person, index) => {
              return <MenuItem value={index}>{person.title}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>

      <Paper elevation={0} variant="outlined" className="BenefitText">
        <p style={{ textAlign: "left", padding: "3%" }}>
          {chosenBenefit.content}
        </p>
      </Paper>
    </ContentBar>
  );
};
export default BenefitsBar;
