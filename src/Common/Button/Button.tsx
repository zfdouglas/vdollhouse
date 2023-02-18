import Button from "@mui/material/Button";
import { green, grey } from "@mui/material/colors";
import { OverridableStringUnion } from "@mui/types";
import React, { PropsWithChildren } from "react";

interface ButtonProps {
  variant: OverridableStringUnion<"text" | "outlined" | "contained">;
  styleOverride?: Object;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
}
const ThemedButton = (props: PropsWithChildren<ButtonProps>) => {
  interface LooseBase {
    [key: string]: any;
  }
  let baseStyle: LooseBase = {
    backgroundColor: "white",
    padding: "8px 16px",
    fontWeight: "500",
    color: "#A1BD69",
  };

  if (props.active) {
    baseStyle.backgroundColor = grey[200];
  }
  return (
    <Button
      style={props.styleOverride ? props.styleOverride : baseStyle}
      onClick={props.onClick}
      variant={props.variant}
    >
      {props.children}
    </Button>
  );
};

export default ThemedButton;
