import React, { ReactElement } from "react";
import ZFD from "../Common/assets/zfd.jpg";
import DEFAULT from "../Common/assets/TeamPlaceholder.jpg";

export interface TeamItem {
  name: string;
  position: string;
  picture: string;
}
export const team: TeamItem[] = [
  {
    name: "Kyle Compton",
    position: "CEO and President",
    picture: DEFAULT,
  },
  {
    name: "Connor Treacy",
    position: "Chief Financial Officer",
    picture: DEFAULT,
  },
  {
    name: "Zhiyang Fu",
    position: "3D Engineering Manager",
    picture: DEFAULT,
  },
  {
    name: "Zack Douglas",
    position: "Senior Software Engineer",
    picture: ZFD,
  },
  {
    name: "Rachel Johnson-Slade",
    position: "Marketing",
    picture: DEFAULT,
  },
];
