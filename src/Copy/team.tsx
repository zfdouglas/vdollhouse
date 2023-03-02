import React, { ReactElement } from "react";
import ZFD from "../Common/assets/zfd.jpg";

export interface TeamItem {
  name: string;
  position: string;
  picture: string;
}
export const team: TeamItem[] = [
  {
    name: "Kyle",
    position: "CEO and President",
    picture: "",
  },
  {
    name: "Connor",
    position: "Chief Financial Officer",
    picture: "",
  },
  {
    name: "Zack",
    position: "Head of Technology",
    picture: ZFD,
  },
];
