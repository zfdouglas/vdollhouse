import styled, { ThemeContext } from "styled-components";
import room from "../Common/assets/room.jpg";
import theme from "../Common/ThemeProvider";
import { Button } from "@mui/material";

export const FormContainer = styled.form`
  width: 50%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  background-color: white;
  flex-wrap: wrap;
  padding: 15px;
`;

export const FormHeader = styled.h1`
  color: ${theme.palette.primary.dark};
  width: 100%;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FormInput = styled.div`
  padding: 20px;
`;

export const PreRegistrationFormContainer = styled.div`
  background-image: url(${room});
  height: 80vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const SubmitButton = styled(Button)`
  background-color: orange;
`;

export const PreRegistrationBlurb = styled.div`
  width: 30%;
  margin: 30px 0px 10px 30px;
  background-color: white;
  padding: 20px;
  text-align: left;
  line-height: 25px;
`;

export const PreRegistrationContent = styled.div`
  margin-top: 10px;
  text-align: left;
  line-height: 25px;
    font-size: medium;
  font-style: italic;
  color: ${theme.palette.primary.dark}
}
`;
