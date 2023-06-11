import React from "react";
import "../HeroBanner/HeroBanner.css";
import CampaignIcon from "@mui/icons-material/Campaign";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProcessHolder from "../ProcessBar/ProcessHolder";
import BenefitsBar from "../BenefitsBar/BenefitsBar";
import { PricingBar } from "../PricingBar/PricingBar";
import TeamBar from "../TeamBar/TeamBar";
import { DemoBar } from "../DemoBar/DemoBar";
import { HiringBar } from "../HiringBar/HiringBar";
import { CallToActionButton } from "../Common/Blocks/Buttons";
import { Heading1, Heading3 } from "../Common/Blocks/Headings";

const HomeScreen = () => {
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
            <CallToActionButton style={{ margin: "3%" }}>
              <CampaignIcon />
              &nbsp; Keep Up to Date with Dollhouse
            </CallToActionButton>
          </div>
          <div className="HeroHeadings">
            <Heading1>See your home in a new way</Heading1>
            <Heading3>See your home as a virtual Dollhouse!</Heading3>
          </div>
        </div>
      </HeroBanner>
      <ProcessHolder />
      <BenefitsBar />
      <PricingBar />
      <TeamBar />
      <HiringBar />
      <DemoBar />
    </div>
  );
};
export default HomeScreen;
