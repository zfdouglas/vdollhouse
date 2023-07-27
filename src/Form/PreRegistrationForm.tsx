import {
  FormHelperText,
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import {
  FormContainer,
  FormHeader,
  FormInput,
  FormRow,
  SubmitButton,
} from "./Form";
import { useState } from "react";

export const PreregistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {};
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader>Pre Register with vDollhouse</FormHeader>

      <FormRow>
        <FormInput>
          <FormControl variant="standard">
            <InputLabel>First Name</InputLabel>
            <Input
              id="First Name"
              placeholder="Frank"
              aria-describedby="Input for First Name"
              required={true}
            />
            <FormHelperText id="Name helper text">Required</FormHelperText>
          </FormControl>
        </FormInput>
        <FormInput>
          <FormControl variant="standard">
            <InputLabel>Last Name</InputLabel>
            <Input
              id="Last Name"
              placeholder="Lloyd Wright"
              aria-describedby="Input for Last Name"
              required={true}
            />
            <FormHelperText id="Name helper text">Required</FormHelperText>
          </FormControl>
        </FormInput>
      </FormRow>
      <FormRow>
        <FormInput>
          <FormControl variant="standard">
            <InputLabel>Company Name</InputLabel>
            <Input
              id="Company Name"
              placeholder="Realty Co"
              aria-describedby="input for company name"
              required={true}
            />
            <FormHelperText id="Company name helper text">
              Required
            </FormHelperText>
          </FormControl>
        </FormInput>
        <FormInput>
          <FormControl variant="standard">
            <InputLabel>Job Title</InputLabel>
            <Input
              id="Job Title"
              placeholder="Realtor"
              aria-describedby="Input for Job Name"
              required={true}
            />
          </FormControl>
        </FormInput>
      </FormRow>
      <FormRow>
        <FormInput>
          <FormControl variant="standard">
            <InputLabel>Email Address</InputLabel>
            <Input
              type="email"
              id="Email"
              placeholder="email@gmail.com"
              aria-describedby="input for email"
              required={true}
            />
            <FormHelperText id="Company name helper text">
              Required
            </FormHelperText>
          </FormControl>
        </FormInput>
        <FormInput>
          <FormControl variant="standard">
            <InputLabel>Phone Number</InputLabel>
            <Input
              type="phone"
              id="Phone Number"
              placeholder="000-000-0000"
              aria-describedby="Input for Phone Number"
              required={true}
            />
          </FormControl>
        </FormInput>
      </FormRow>
      <FormRow>
        <FormControl sx={{ width: "60%" }}>
          <FormLabel sx={{ textAlign: "left" }} id="type-of-user-label">
            Type of User
          </FormLabel>
          <RadioGroup
            aria-labelledby="type-of-user-label"
            defaultValue="realtor"
            name="type-of-user-radio"
            row
          >
            <FormControlLabel
              value="homeDecorator"
              control={<Radio />}
              label="Home Decorator"
            />
            <FormControlLabel
              value="houseHunter"
              control={<Radio />}
              label="House Hunter"
            />
            <FormControlLabel
              value="realEstateProfessional"
              control={<Radio />}
              label="Real Estate Professional"
            />
            <FormControlLabel
              value="decorRetailer"
              control={<Radio />}
              label="Decor Retailer"
            />
          </RadioGroup>
        </FormControl>
      </FormRow>
      <SubmitButton color={"primary"} variant={"contained"} size={"large"}>
        Submit
      </SubmitButton>
    </FormContainer>
  );
};
