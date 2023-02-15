import React from "react";
import ProcessTile from "./ProcessTiles";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CompareIcon from "@mui/icons-material/Compare";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import theme from "../Common/ThemeProvider";

const ProcessHolder = () => {
  const processes = [
    {
      process: "Login",
      image: <ComputerIcon color="secondary" fontSize="large" />,
      blurb: "Login to your vDollhouse Account on your desktop",
    },
    {
      process: "Open",
      image: <PhoneIphoneIcon color="secondary" fontSize="large" />,
      blurb: "Open the vDollhouse mobile app",
    },
    {
      process: "Scan",
      image: <QrCode2Icon color="secondary" fontSize="large" />,
      blurb: "Use your phone to scan the sites' generated QR code",
    },
    {
      process: "Capture",
      image: <CompareIcon color="secondary" fontSize="large" />,
      blurb: "Scan your room and furniture with the mobile app",
    },
    {
      process: "Design",
      image: <DesignServicesIcon color="secondary" fontSize="large" />,
      blurb: "Use your phone or the desktop to start designing",
    },
  ];
  return (
    <div>
      <h1 style={{ color: theme.palette.primary.main }}>The Process</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {processes.map((step) => {
          return (
            <ProcessTile
              process={step.process}
              image={step.image}
              blurb={step.blurb}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProcessHolder;
