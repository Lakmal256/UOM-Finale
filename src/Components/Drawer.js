import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HelpIcon from "@mui/icons-material/Help";
import "../ComponentStyles/drawer.css";
import { useNavigate } from "react-router-dom";

const drawerWidth = 300;

const ResponsiveDrawer = () => {
  const history = useNavigate();

  const menuItems = ["Payments", "Profile", "Receipts", "Help", "Logout"];

  const setIcon = (item) => {
    switch (item) {
      case "Payments":
        return <AttachMoneyIcon />;
      case "Profile":
        return <PersonIcon />;
      case "Receipts":
        return <ReceiptIcon />;
      case "Help":
        return <HelpIcon />;
      case "Logout":
        return <LogoutIcon />;
      default:
        return null;
    }
  };

  const setRoute = (route) => {
    history(`/app/${route}`);
  };

  const drawer = (
    <div>
      <List>
        {menuItems.map((text) => (
          <ListItem
            className="drawer_list_item"
            onClick={() => setRoute(text)}
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{setIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          classes={{ paper: "drawer_main" }}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
