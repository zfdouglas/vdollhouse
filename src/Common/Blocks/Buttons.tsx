import styled from "styled-components";
import More from "@mui/icons-material/ExpandCircleDown";
import CampaignIcon from "@mui/icons-material/Campaign";

import theme from "../ThemeProvider";
import { Link } from "react-router-dom";

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

export const ExpandButton = styled(More)<{
  color?: string;
  transform: string;
  fontSize?: string;
}>`
  color: ${(props) => (props.color ? props.color : "primary")};
  transform: ${(props) => props.transform};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
`;

export const ContactUsButton = () => {
  return (
    <Link
      to={"contact"}
      style={{
        color: theme.palette.primary.main,
        textDecoration: "none",
        margin: "3%",
      }}
    >
      <CallToActionButton>
        <CampaignIcon />
        &nbsp; Keep Up to Date with Dollhouse
      </CallToActionButton>
    </Link>
  );
};
