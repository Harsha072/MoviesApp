import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {AuthContext} from "../../contexts/authContext";


const styles = {
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  // offset: theme.mixins.toolbar,
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorite Movies", path: "/movies/favourite" },
    { label: "Upcoming movies", path: "/movies/upcoming" },
    {
      label: "Popular",
      subMenu: [
        { label: "Actors", path: "/actors/popular" },
        { label: "Tv Series", path: "/tv/popular" },
        { label: "Movies", path: "/movies/popular" },
      ],
    },
    { label: "Favorite Series", path: "/series/favourite" },
    { label: "Sign out", path: "/signout" },
  ];

  const handleMenuSelect = (pageURL) => {
    console.log("th epage ", pageURL);
    if (pageURL.subMenu) {
      setOpenSubMenu(true);
      handleMenuClose();
    } else if (pageURL === "/signout") {
      window.localStorage.clear();
      window.location.reload()
    } else {
      navigate(pageURL);
      handleMenuClose();
    }
  };

  const handleMenu = (event) => {
    console.log("on click options", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (isAuthenticated) => {
    if (!isAuthenticated) {
      return null; // Return null if user is not authenticated
    }
    if (isMobile) {
      console.log("logged in ",AuthContext.Consumer)
      return (
        <>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {menuOptions.map((opt) => (
              <MenuItem key={opt.label} onClick={() => handleMenuSelect(opt)}>
                {opt.label}
              </MenuItem>
            ))}
          </Menu>
          {openSubMenu && (
            <Menu
              id="submenu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={openSubMenu}
            >
              {menuOptions.map((option) => (
                <div key={option.label}>
                  {option.subMenu && (
                    <Menu
                      anchorEl={anchorEl}
                      open={openSubMenu}
                      onClose={() => setOpenSubMenu(false)}
                    >
                      {option.subMenu.map((subOption) => (
                        <MenuItem
                          key={subOption.label}
                          onClick={() => handleMenuSelect(subOption.path)}
                        >
                          {subOption.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </div>
              ))}
            </Menu>
          )}
        </>
      );
    } else {
      return (
        <>
          {menuOptions.map((opt) => (
            <div key={opt.label}>
              <Button
                color="inherit"
                onClick={opt.subMenu ? handleMenuClick : () => handleMenuSelect(opt.path)}
              >
                {opt.label}
              </Button>
              {opt.subMenu && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {opt.subMenu.map((subOpt) => (
                    <MenuItem
                      key={subOpt.label}
                      onClick={() => handleMenuSelect(subOpt.path)}
                    >
                      {subOpt.label}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <>
          <AppBar sx={styles.appbar} position="fixed" elevation={0} color="primary">
            <Toolbar>
              <Typography variant="h4" sx={styles.title}>
                TMDB Client
              </Typography>
              <Typography variant="h6" sx={styles.title}>
                All you ever wanted to know about Movies!
              </Typography>
              {renderMenu(authContext.isAuthenticated)}
            </Toolbar>
          </AppBar>
          <Offset />
        </>
      )}
    </AuthContext.Consumer>
  );
};

export default SiteHeader;