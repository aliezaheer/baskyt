import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import profileImg from "../assets/profile.jpg";
import logo from "../assets/logo.png";

const NavBarCust = styled(AppBar)`
  background: #283848;
  margin-bottom: 3px;
`;

export default function NavBar() {
  return (
    <NavBarCust position="static">
      <Toolbar>
        
          <img src={logo} alt="" className="logo" />

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon className="hamburgerMenu" />
          </IconButton>
    

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        ></Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <SearchIcon />
        </IconButton>
        <img className="profileImg" src={profileImg} alt="" />
      </Toolbar>
    </NavBarCust>
  );
}
