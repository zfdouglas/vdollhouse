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
    name: "Kyle",
    position: "CEO and President",
    picture: DEFAULT,
  },
  {
    name: "Connor",
    position: "Chief Financial Officer",
    picture: DEFAULT,
  },
  {
    name: "Zack",
    position: "Head of Technology",
    picture: ZFD,
  },
  {
    name: "Zhiyang",
    position: "Software Architect",
    picture: DEFAULT,
  },
];
