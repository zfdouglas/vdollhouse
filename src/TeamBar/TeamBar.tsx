import React from "react";
import { ContentBar } from "../Common/Blocks/ContentBar";
import theme from "../Common/ThemeProvider";
import { team } from "../Copy/team";
import { MemberCard } from "./MemberCard";
import grey from "../Common/assets/grey.jpg";
const TeamBar = () => {
  return (
    <ContentBar header="THE TEAM" headerColor="white" backgroundImage={grey}>
      <div className="MemberHolder">
        {team.map((member) => {
          return <MemberCard member={member} />;
        })}
      </div>
    </ContentBar>
  );
};
export default TeamBar;
