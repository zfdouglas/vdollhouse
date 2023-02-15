import React from "react";

import HeroBanner from "../HeroBanner/HeroBanner";
import ProcessHolder from "../ProcessBar/ProcessHolder";
import BenefitsBar from "../BenefitsBar/BenefitsBar";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <ProcessHolder />
      <BenefitsBar />
    </div>
  );
};
export default HomeScreen;
