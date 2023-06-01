import styled from "styled-components";
import theme from "../ThemeProvider";

export const Heading1 = styled.h1`
  color: ${theme.palette.primary.contrastText};
  font-size: 3vw;
  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

export const Heading2 = styled.h2`
  color: ${theme.palette.primary.dark};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Heading3 = styled.h3`
  color: ${theme.palette.primary.dark};
  font-size: 2vw;
  @media (max-width: 768px) {
    font-size: 4.5vw;
  }
`;
