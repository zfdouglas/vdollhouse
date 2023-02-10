import React from "react";

import HeroBanner from "../HeroBanner/HeroBanner";
import ProcessHolder from "../ProcessBar/ProcessHolder";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <ProcessHolder />
    </div>
  );
};
export default HomeScreen;
