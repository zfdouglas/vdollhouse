import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import green from "../Common/assets/green2.jpg";
import HubspotContactForm from "../HubspotForm/HubspotForm";

const ContactScreen = () => {
  return (
    <HeroBanner backgroundImage={green}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <h1>Sign Up for Our Newsletter</h1>
        <div style={{ margin: "auto" }}>
          <HubspotContactForm />
        </div>
      </div>
    </HeroBanner>
  );
};

export default ContactScreen;
