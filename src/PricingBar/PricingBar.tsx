import React from "react";
import { ContentBar } from "../Common/Blocks/ContentBar";
import { PricingBox } from "./PricingBox";
import { pricing } from "../Copy/pricing";
export const PricingBar = () => {
  return (
    <ContentBar header="Pricing" headerColor="#A1BD69" backgroundColor="white">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {pricing.map((priceItem) => {
          return <PricingBox item={priceItem} />;
        })}
      </div>
    </ContentBar>
  );
};
