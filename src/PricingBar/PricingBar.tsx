import React from "react";
import { ContentBar } from "../Common/Blocks/ContentBar";
import theme from "../Common/ThemeProvider";
export const PricingBar = () => {
  return (
    <ContentBar
      header="Pricing"
      headerColor={theme.palette.primary.main}
      backgroundColor="none"
    ></ContentBar>
  );
};
