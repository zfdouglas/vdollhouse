import { Children } from "react";
import theme from "../ThemeProvider";
import React from "react";
interface ContentBarProps {
  header: string;
  headerColor: string;
  backgroundColor: string;
  children?: any;
}
export const ContentBar = (props: ContentBarProps) => {
  const { header, headerColor, backgroundColor, children } = props;
  return (
    <div
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "none",
        paddingBottom: "2%",
      }}
    >
      <h1 style={{ color: headerColor, paddingTop: "2%" }}>{header}</h1>

      {children}
    </div>
  );
};
