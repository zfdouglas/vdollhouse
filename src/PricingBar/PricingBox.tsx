import React from "react";
import "./Pricing.css";
import { PriceItem } from "../Copy/pricing";
import Button from "../Common/Button/Button";
export interface PricingBoxProps {
  item: PriceItem;
}
export const PricingBox = (props: PricingBoxProps) => {
  const { target, price, details, accentColor, product, headerColor } =
    props.item;
  return (
    <div className="PricingBox">
      <header style={{ backgroundColor: accentColor }}>
        <h5 style={{ color: headerColor, padding: "2px" }}>
          Ideal For: {target}
        </h5>
      </header>
      <h3>{product}</h3>
      <h2 style={{ color: accentColor }}>${price}</h2>
      <ul>
        {details.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <footer>
        <Button
          variant="outlined"
          styleOverride={{
            backgroundColor: accentColor,
            padding: "8px 16px",
            fontWeight: "500",
            color: "white",
          }}
        >
          Schedule a Demo
        </Button>
      </footer>
    </div>
  );
};
