import React from "react";
interface ProcessTileProps {
  process: string;
  image: React.ReactElement;
  blurb: string;
}
const ProcessTile = ({ process, image, blurb }: ProcessTileProps) => {
  return (
    <div>
      <h4>{process}</h4>
      {image}
      <div>{blurb}</div>
    </div>
  );
};
export default ProcessTile;
