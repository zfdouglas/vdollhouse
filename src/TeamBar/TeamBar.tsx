import React from "react";
import { ContentBar } from "../Common/Blocks/ContentBar";
import theme from "../Common/ThemeProvider";
import { team } from "../Copy/team";
import { MemberCard } from "./MemberCard";
const TeamBar = () => {
  return (
    <ContentBar
      header="Meet The Dollhouse Team"
      headerColor="white"
      backgroundColor={theme.palette.primary.main}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {team.map((member) => {
          return <MemberCard member={member} />;
        })}
      </div>
    </ContentBar>
  );
};
export default TeamBar;
