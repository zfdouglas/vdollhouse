import React from "react";

import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import logo from "../Common/assets/logowhite.png";
import theme from "../Common/ThemeProvider";
import "./NavBar.css";
import Grid from "@mui/material/Grid";
import MobileNav from "./MobileNav";
import { pages } from "../Copy/nav";

const NavBar = () => {
  let activeClassName = "nav-active";

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: theme.palette.secondary.main,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link to={""} style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <IconButton edge="start">
                <img src={logo} style={{ height: "2em", margin: ".2em" }} />
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                component="a"
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
          </Link>
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
