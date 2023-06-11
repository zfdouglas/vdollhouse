import styled, { ThemeProvider } from "styled-components";
import Button from "@mui/material/Button";
import theme from "../ThemeProvider";

export const CallToActionButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  color: ${theme.palette.primary.main};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.8rem;
  text-align: center;
  border-radius: 5px;
  border: 0px solid;
  &:hover {
    background-color: ${theme.palette.grey[100]};
    cursor: pointer;
  }
`;
