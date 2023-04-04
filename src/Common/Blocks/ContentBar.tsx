import { Children } from "react";
import theme from "../ThemeProvider";
import React from "react";
interface ContentBarProps {
  header: string;
  headerColor: string;
  backgroundColor?: string;
  backgroundImage?: string;
  children?: any;
}
export const ContentBar = (props: ContentBarProps) => {
  const { header, headerColor, backgroundColor, children, backgroundImage } =
    props;
  return (
    <div
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "none",
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        paddingBottom: "2%",
      }}
    >
      <h1 style={{ color: headerColor, paddingTop: "2%", fontWeight: "700" }}>
        {header}
      </h1>

      {children}
    </div>
  );
};
