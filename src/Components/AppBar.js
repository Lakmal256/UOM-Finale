import * as React from "react";
import AppBar from "@mui/material/AppBar";
import favicon from "../images/favicon.ico";
import "../ComponentStyles/appbar.css";

const Header = () => {
  return (
    <AppBar className="appbar" position="static">
      <div className="appbar_header">
        <img src={favicon} alt="firespot" />
        <div className="appbar_text">UOM Payment Gateway</div>
      </div>
    </AppBar>
  );
};

export default Header;
