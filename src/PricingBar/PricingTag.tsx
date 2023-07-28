import React, { useState } from "react";
import "./Pricing.css";
import Button from "../Common/Button/Button";
import { ComplexPriceGroup } from "../Copy/complexPricing";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { Costs } from "./Costs";
import { PricingTagCard, PricingTagCardHeader } from "./Pricing";
import { Link } from "react-router-dom";
export interface PricingBoxProps {
  item: ComplexPriceGroup;
}
export const PricingTag = (props: PricingBoxProps) => {
  const {
    displayName,
    idealFor,
    youGet,
    price,
    accentColor,
    headerColor,
    specialData,
    buttonName = "Schedule a Demo",
    buttonNav,
  } = props.item;

  const [currentPriceGroup, setCurrentPriceGroup] = useState<string | null>(
    price?.generalPrice ? "" : "monthlyPrice"
  );
  const handleToggleClick = (
    event: React.MouseEvent<HTMLElement>,
    priceType: string | null
  ) => {
    setCurrentPriceGroup(priceType);
  };
  return (
    <PricingTagCard>
      <PricingTagCardHeader style={{ backgroundColor: accentColor }}>
        <h5 style={{ color: headerColor, padding: "2px" }}>
          Ideal For: {idealFor}
        </h5>
      </PricingTagCardHeader>
      <h3 style={{ color: accentColor }}>{displayName}</h3>
      <div>
        {youGet &&
          youGet.map((item) => {
            return <p>{item}</p>;
          })}
      </div>
      {price?.priceAnnual && price.priceMonthly ? (
        <div>
          <ToggleButtonGroup
            value={currentPriceGroup}
            onChange={handleToggleClick}
            exclusive
          >
            {price && price.priceMonthly ? (
              <ToggleButton value="monthlyPrice" aria-label="left aligned">
                Monthly Price
              </ToggleButton>
            ) : null}
            {price && price.priceAnnual ? (
              <ToggleButton
                value="annualPrice"
                aria-label="left aligned"
                onClick={handleToggleClick}
              >
                Annual Price
              </ToggleButton>
            ) : null}
          </ToggleButtonGroup>
        </div>
      ) : null}
      <div style={{ textAlign: "left", paddingLeft: "15px" }}>
        {price && price.generalPrice && currentPriceGroup === "" ? (
          <Costs prices={price.generalPrice.data} />
        ) : null}
        {price && price.priceMonthly && currentPriceGroup === "monthlyPrice" ? (
          <Costs prices={price.priceMonthly.data} />
        ) : null}
        {price && price.priceAnnual && currentPriceGroup === "annualPrice" ? (
          <Costs prices={price.priceAnnual.data} />
        ) : null}
        {price && price.noPrice ? (
          <h3 style={{ color: "#A1BD69", textAlign: "center" }}>
            {price.noPrice}
          </h3>
        ) : null}
        {specialData && specialData}
      </div>
      <footer>
        <Link to={buttonNav}>
          <Button
            variant="outlined"
            styleOverride={{
              backgroundColor: accentColor,
              padding: "8px 16px",
              fontWeight: "500",
              color: "white",
            }}
          >
            {buttonName}
          </Button>
        </Link>
      </footer>
    </PricingTagCard>
  );
};
