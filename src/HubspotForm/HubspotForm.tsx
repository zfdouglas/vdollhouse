import React from "react";
import HubspotForm from "react-hubspot-form";
const HubspotContactForm = () => {
  return (
    <HubspotForm
      portalId="39729475"
      formId="1e0bf5bc-e83c-4103-b40a-65cbccdd5f40"
      onSubmit={() => console.log("Submit!")}
      onReady={() => console.log(`Form ready!`)}
      loading={<div>Loading...</div>}
    />
  );
};

export default HubspotContactForm;
