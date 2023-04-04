import React from "react";
import "./Team.css";
import { TeamItem } from "../Copy/team";

interface MemberCardProps {
  member: TeamItem;
}
export const MemberCard = (props: MemberCardProps) => {
  const { name, picture, position } = props.member;
  return (
    <div className="MemberCard">
      <img
        src={picture}
        style={{ height: "20vh", width: "20vh", borderRadius: "100%" }}
      />
      <h2>{name}</h2>
      <h4>{position}</h4>
    </div>
  );
};
