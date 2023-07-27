import { Price } from "../Copy/complexPricing";

interface CostProps {
  prices: Price[];
}
export const Costs = ({ prices }: CostProps) => {
  return (
    <div>
      {prices.map((i) => {
        return (
          <>
            <h3 style={{ color: "#A1BD69" }}>
              {i.displayName}:<span style={{ color: "grey" }}> {i.price}</span>
            </h3>
          </>
        );
      })}
    </div>
  );
};
