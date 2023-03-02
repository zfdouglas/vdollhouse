import React from "react";

import HeroBanner from "../HeroBanner/HeroBanner";
import ProcessHolder from "../ProcessBar/ProcessHolder";
import BenefitsBar from "../BenefitsBar/BenefitsBar";
import { PricingBar } from "../PricingBar/PricingBar";
import TeamBar from "../TeamBar/TeamBar";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <ProcessHolder />
      <BenefitsBar />
      <PricingBar />
      <TeamBar />
    </div>
  );
};
export default HomeScreen;
