import React from "react";

import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import NavItem from "./NavItem";
import logo from "../Common/assets/logogreen.png";
import theme from "../Common/ThemeProvider";
import "./NavBar.css";
import Grid from "@mui/material/Grid";
import MobileNav from "./MobileNav";

const NavBar = () => {
  let activeClassName = "nav-active";
  const pages = [
    { name: "Home", url: "" },
    { name: "Media", url: "media" },
    { name: "Support", url: "support" },
    { name: "Scan QR", url: "qr" },
    { name: "Work with Dollhouse", url: "portal" },
    { name: "Login", url: "login" },
  ];

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
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start">
              <img src={logo} style={{ height: "2em", margin: ".2em" }} />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "none", md: "inline" },
                flexGrow: 1,
                fontWeight: 600,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              vDollhouse
            </Typography>
          </div>
          <MobileNav />

          <nav>
            <Grid>
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
                      // onClick={handleCloseNavMenu}
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
            </Grid>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
