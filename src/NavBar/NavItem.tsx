import React from "react";
import { NavLink } from "react-router-dom";

export type NavItemProps = {
  children: React.ReactElement;
  url: string;
  styling?: Object;
  isActive: boolean;
  activeClassName?: string;
};
const NavItem = (props: NavItemProps) => {
  const { children, url, styling, isActive, activeClassName } = props;
  const NavItemStyling = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <NavLink
      to={url}
      style={NavItemStyling}
      className={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      {children}
    </NavLink>
  );
};
export default NavItem;
