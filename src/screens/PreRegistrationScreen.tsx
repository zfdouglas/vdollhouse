import React from "react";
import { PreregistrationForm } from "../Form/PreRegistrationForm";
import {
  PreRegistrationBlurb,
  PreRegistrationContent,
  PreRegistrationFormContainer,
} from "../Form/Form";

const PreRegistrationScreen = () => {
  return (
    <PreRegistrationFormContainer>
      <PreRegistrationBlurb>
        <PreRegistrationContent>
          Register now to receive your first month’s subscription to vDollhouse
          free (or first month’s retail/advertising fees waived), and to be
          notified when vDollhouse is launched. Pre-registration is not a
          commitment to subscribe to vDollhouse when vDollhouse is launched.
        </PreRegistrationContent>
        <PreRegistrationContent>
          When vDollhouse is launched, you will receive an email at the email
          address provided, and after registering for a paid subscription the
          value of a monthly starter subscription will be deducted from your
          first month’s invoice. For decor retailers that pre-register, all
          referral and impression fees will be waived for the first month of
          use. Please fill out the form to pre-register:
        </PreRegistrationContent>
      </PreRegistrationBlurb>
      <PreregistrationForm />
    </PreRegistrationFormContainer>
  );
};

export default PreRegistrationScreen;
