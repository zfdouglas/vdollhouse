import styled from "styled-components";

export const PricingContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 3%;
  display: flex;
  align-content: center;
  justify-content: space-around;
`;

export const PricingTagContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 3%;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PricingTagCard = styled.div`
  width: 25%;
  background-color: white;
  border: 2px solid #d2d4d1;
  min-height: 30vh;
  border-radius: 5px;
  margin: auto;
  margin-top: 2%;
`;

export const PricingTagCardHeader = styled.header`
  display: flex;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
`;
