import { useState } from "react";
import ThemedButton from "../Common/Button/Button";
import {
  ComplexPriceGroup,
  decorMarketplace,
  freePricing,
  realEstateProPricing,
} from "../Copy/complexPricing";
import { PricingBox } from "./PricingBox";
import { PricingContainer, PricingTagContainer } from "./Pricing";
import { PricingTag } from "./PricingTag";

export const realEstateGroups = [
  "Free",
  "Starter",
  "Professional",
  "Professional Plus",
  "Business",
  "Business Plus",
  "Enterprise",
];
export const Groups = [
  "House Hunters/Home Decorators",
  "Real Estate Professionals",
  "Decor Retailers",
];
export const PricingBoxMultitab = () => {
  const [chosenGroup, setChosenGroup] = useState(Groups[0]);
  return (
    <>
      <PricingContainer>
        {Groups.map((group, index) => {
          return (
            <ThemedButton
              variant="contained"
              active={chosenGroup === group ? true : false}
              onClick={() => setChosenGroup(group)}
            >
              <div style={{ fontWeight: "600" }}>{group}</div>
            </ThemedButton>
          );
        })}
      </PricingContainer>
      <PricingTagContainer>
        {chosenGroup === Groups[0] ? <PricingTag item={freePricing} /> : null}
        {chosenGroup === Groups[1]
          ? realEstateProPricing.map((i) => <PricingTag item={i} />)
          : null}
        {chosenGroup === Groups[2] ? (
          <PricingTag item={decorMarketplace} />
        ) : null}
      </PricingTagContainer>
    </>
  );
};
