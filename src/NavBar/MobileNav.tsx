import Typography from "@mui/material/Typography";
import NavItem from "./NavItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../Common/ThemeProvider";
import React from "react";
import { DropdownMenu } from "./DropdownMenu";

const MobileNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <NavItem url={"/"} isActive={true}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          vDollhouse
        </Typography>
      </NavItem>
      <Box
        justifySelf="flex-end"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="primary"
        >
          <MenuIcon style={{ color: "white", paddingLeft: "32px" }} />
        </IconButton>
        <DropdownMenu anchor={anchorElNav} onClose={handleCloseNavMenu} />
      </Box>
    </div>
  );
};
export default MobileNav;
