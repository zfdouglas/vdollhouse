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
            digital twin of their listing can simply use the Matterport Capture
            app or Matterport Capture Services.
          </li>
          <li>
            Home decorators can create a free digital twin of their home using
            the Matterport Capture App, or can access a realtor’s existing
            digital twin.
          </li>
        </ul>
      </div>
    ),
  },
  {
    process: "Step 2: Scan your decor",
    image: <PhoneIphoneIcon color="secondary" fontSize="large" />,
    blurb: (
      <div>
        <p>
          Use any supported mobile device to scan around your room to create 3D
          models of your decor.
        </p>
        <p>
          Realtors can also find stock for sale decor in your dashboard to
          virtually stage your properties.
        </p>
      </div>
    ),
  },
  {
    process: "Step 3: Decorate your home",
    image: <QrCode2Icon color="secondary" fontSize="large" />,
    blurb: (
      <div>
        <p>
          Decorate your home, listed property, or home-to-be with your furniture
          to imagine or show off what it could look like living there.
        </p>
      </div>
    ),
  },
  {
    process: "Step 4: Find Complementary Decor",
    image: <CompareIcon color="secondary" fontSize="large" />,
    blurb: (
      <div>
        <p>
          See recommended pieces, search for items similar to your inspiration,
          and browse the marketplacer for items to complete your home or listed
          property.
        </p>
        <p>
          Decor retailers can also list their decor for sale right in the
          context of people's home here on Dollhouse
        </p>
      </div>
    ),
  },
  {
    process: "Step 5: See your Home in a New Way",
    image: <DesignServicesIcon color="secondary" fontSize="large" />,
    blurb: (
      <div>
        <p>
          Whether through a desktop or mobile digital twin, augmented reality,
          or virtual reality. Dollhouse can help you and others see their home
          or home-to-be in a new way.
        </p>
      </div>
    ),
  },
];
