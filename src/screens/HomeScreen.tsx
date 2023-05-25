import React from "react";

import HeroBanner from "../HeroBanner/HeroBanner";
import ProcessHolder from "../ProcessBar/ProcessHolder";
import BenefitsBar from "../BenefitsBar/BenefitsBar";
import { PricingBar } from "../PricingBar/PricingBar";
import TeamBar from "../TeamBar/TeamBar";
import { DemoBar } from "../DemoBar/DemoBar";
import { HiringBar } from "../HiringBar/HiringBar";
import { CallToActionButton } from "../Common/Blocks/Buttons";

const HomeScreen = () => {
  return (
    <div>
      <HeroBanner>
        <CallToActionButton>Keep Up to Date with Dollhouse</CallToActionButton>
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
