import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import green from "../Common/assets/green2.jpg";

const ErrorScreen = () => {
  return (
    <HeroBanner backgroundImage={green}>
      <h1>Error</h1>
    </HeroBanner>
  );
};

export default ErrorScreen;
