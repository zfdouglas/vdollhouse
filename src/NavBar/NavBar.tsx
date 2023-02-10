import React from "react";

import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import IconButton from "@mui/material/IconButton/IconButton";
import Menu from "@mui/material/Menu/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import NavItem from "./NavItem";
import logo from "../Common/assets/logogreen.png";
import theme from "../Common/ThemeProvider";

const NavBar = () => {
  let activeClassName = "nav-active";
  const pages = [
    { name: "Home", url: "" },
    { name: "About", url: "about" },
    { name: "Contact", url: "contact" },
  ];
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: "10",
        boxShadow: "none",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} style={{ height: "2em", margin: "1em" }} />
          <NavItem url={"/"} isActive={true}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              vDollhouse
            </Typography>
          </NavItem>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavItem url={page.url} isActive={true}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.url}</Typography>
                  </MenuItem>
                </NavItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary",
              textDecoration: "none",
            }}
          >
            vDollhouse
          </Typography>
          <nav>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavLink
                  to={page.url}
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    className="NavButtons"
                    sx={{
                      my: 2,
                      marginRight: "2em",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "1em",
                      display: "block",
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
