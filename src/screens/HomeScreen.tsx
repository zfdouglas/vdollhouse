import React from "react";
import "../HeroBanner/HeroBanner.css";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProcessHolder from "../ProcessBar/ProcessHolder";
import BenefitsBar from "../BenefitsBar/BenefitsBar";
import { PricingBar } from "../PricingBar/PricingBar";
import TeamBar from "../TeamBar/TeamBar";
import { ContactUsButton } from "../Common/Blocks/Buttons";
import { Heading1, Heading3 } from "../Common/Blocks/Headings";
import { useNavigate } from "react-router-dom";
import { PricingBoxMultitab } from "../PricingBar/PricingBoxMultitab";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/prereg");
  };
  return (
    <div>
      <HeroBanner>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "inherit",
              flexDirection: "row-reverse",
            }}
          >
            <ContactUsButton />
          </div>
          <div className="HeroHeadings">
            <Heading1>See your home in a new way</Heading1>
            <Heading3>See your home as a virtual Dollhouse!</Heading3>
          </div>
        </div>
      </HeroBanner>
      <ProcessHolder />
      <BenefitsBar />
      <PricingBoxMultitab />
      <PricingBar />
      <TeamBar />
    </div>
  );
};
export default HomeScreen;
