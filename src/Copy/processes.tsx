import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CompareIcon from "@mui/icons-material/Compare";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import React, { ReactElement } from "react";

export interface Process {
  process: string;
  image: ReactElement;
  blurb: ReactElement;
}
export const processes: Process[] = [
  {
    process: "Step 1: Create your virtual Dollhouse",
    image: <ComputerIcon color="secondary" fontSize="large" />,
    blurb: (
      <div style={{ textAlign: "left" }}>
        <ul>
          <li>
            A virtual Dollhouse is a digital twin or 3d model of your home,
            listed property, or home-to-be, that you can place 3d models of
            furniture in.
          </li>
          <li>
            Realtors can list existing Matterport digital twins (or 3D models)
            of their listings in vDollhouse. Realtors that haven’t created a
            digital twin of their listing can simply use the{" "}
            <a href="https://matterport.com/3d-capture-applications">
              Matterport Capture app
            </a>{" "}
            or{" "}
            <a href="https://matterport.com/capture-services">
              Matterport Capture Services
            </a>
            .
          </li>
          <li>
            Home decorators can create a free digital twin of their home using
            the{" "}
            <a href="https://matterport.com/3d-capture-applications">
              Matterport Capture app
            </a>
            , or can access a realtor’s existing digital twin.
          </li>
        </ul>
      </div>
    ),
  },
  {
    process: "Step 2: Scan your decor",
    image: <PhoneIphoneIcon color="secondary" fontSize="large" />,
    blurb: (
      <div style={{ textAlign: "left" }}>
        <ul>
          <li>
            Use any supported mobile device to scan around your room to create
            3D models of your decor.
          </li>
        </ul>
      </div>
    ),
  },
  {
    process: "Step 3: Decorate your home",
    image: <QrCode2Icon color="secondary" fontSize="large" />,
    blurb: (
      <div style={{ textAlign: "left" }}>
        <ul>
          <li>
            Decorate your home-to-be with your newly scanned decor to imagine
            what it could look like living there.
          </li>
          <li>
            Realtors can also find stock or for-sale decor in your dashboard to
            virtually stage your properties.
          </li>
        </ul>
      </div>
    ),
  },
  {
    process: "Step 4: Find Complementary Decor",
    image: <CompareIcon color="secondary" fontSize="large" />,
    blurb: (
      <div style={{ textAlign: "left" }}>
        <ul>
          <li>
            See recommended pieces, search for items like your inspiration, and
            browse the marketplace for items to complete your home or listed
            property
          </li>
        </ul>
      </div>
    ),
  },
  {
    process: "Step 5: See your Home in a New Way",
    image: <DesignServicesIcon color="secondary" fontSize="large" />,
    blurb: (
      <div style={{ textAlign: "left" }}>
        <ul>
          <li>
            Whether through a desktop or mobile digital twin, augmented reality,
            or virtual reality. Dollhouse can help you and others see their home
            or home-to-be in a new way.
          </li>
        </ul>
      </div>
    ),
  },
];
