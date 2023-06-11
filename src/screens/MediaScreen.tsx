import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import green from "../Common/assets/green2.jpg";
import { ComingSoon, FullText } from "../Common/Blocks/FullText";

const MediaScreen = () => {
  return (
    <HeroBanner backgroundImage={green}>
      <ComingSoon>
        <FullText>Coming Soon</FullText>
      </ComingSoon>
    </HeroBanner>
  );
};

export default MediaScreen;
