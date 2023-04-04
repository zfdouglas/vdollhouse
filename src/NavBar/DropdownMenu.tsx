import Menu from "@mui/material/Menu";
import React from "react";
import NavItem from "./NavItem";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import theme from "../Common/ThemeProvider";

interface DropdownMenuProps {
  anchor: HTMLElement | null;
  onClose: () => void;
}
export const DropdownMenu = (props: DropdownMenuProps) => {
  const pages = [
    { name: "Home", url: "" },
    { name: "Media", url: "media" },
    { name: "Support", url: "suport" },
    { name: "Scan QR", url: "qr" },
    { name: "Work with Dollhouse", url: "portal" },
    { name: "Login", url: "login" },
  ];

  return (
    <Menu
      id="menu-appbar"
      anchorEl={props.anchor}
      variant="menu"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(props.anchor)}
      onClose={props.onClose}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {pages.map((page) => (
        <NavItem url={page.url} isActive={true}>
          <MenuItem key={page.name} onClick={props.onClose}>
            <Typography
              style={{ color: theme.palette.primary.main }}
              textAlign="center"
            >
              {page.name}
            </Typography>
          </MenuItem>
        </NavItem>
      ))}
    </Menu>
  );
};
