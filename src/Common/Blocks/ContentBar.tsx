import { Children } from "react";
import theme from "../ThemeProvider";

interface ContentBarProps {
  header: string;
  headerColor: string;
  backgroundColor: string;
  children: any;
}
export const ContentBar = (props: ContentBarProps) => {
  const { header, headerColor, backgroundColor, children } = props;
  return (
    <div
      style={{ backgroundColor: backgroundColor ? backgroundColor : "none" }}
    >
      <h1 style={{ color: headerColor }}>{header}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      ></div>
      {children}
    </div>
  );
};
