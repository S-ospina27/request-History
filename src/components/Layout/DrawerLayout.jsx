import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import book from "../../assets/img/book.gif";
import salir from "../../assets/img/salir.gif";
import Teclab from "../../assets/img/Teclab.png";
import Avatar from "../../assets/img/avatar.png";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import "./Layout.css";
import RouteNavigations from "../tools/RouteNavigations";
import { Link } from "react-router-dom";

const drawerWidth = 270;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function DrawerLayout({ helpOpen, setHelpOpen }) {
  const theme = useTheme();
  const [openDrown, setOpenDrown] = React.useState(false);
  const [openCompaniesDrown, setopenCompaniesDrown] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setOpenDrown(!openDrown);
  };

  const handleCompaniesClick = () => {
    setopenCompaniesDrown(!openCompaniesDrown);
  };
  const handleDrawerClose = () => {
    setHelpOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={helpOpen}
      >
        <DrawerHeader>
          <img
            src={salir}
            style={{ cursor: "pointer" }}
            onClick={handleDrawerClose}
            width={"15%"}
          />

          <img
            className={"TeclabLayout"}
            src={Teclab}
            onClick={handleDrawerClose}
          />
        </DrawerHeader>
        {/* <h1 className={"titulo-drawer"}>Guia  <img src={book} width={"10%"} /></h1>  */}
        <Divider />
        <div className={"contenerdor-avatar"}>
          <img className={"avatar"} src={Avatar} />
        </div>
        <div className={"contenedor-info"}>
          <label className={"label-saludo"}>Bienvenido</label>
        </div>
        <Divider />
        <List>
          {RouteNavigations.administrator.requeriments.map((routes,index) => (
            <ListItemButton key={index} component={Link} to={routes.url} sx={{ pl: 2 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={routes.label} />
            </ListItemButton>
          ))}

          <ListItemButton onClick={handleCompaniesClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Compañias" />
            {openCompaniesDrown ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCompaniesDrown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {RouteNavigations.administrator.companies.map((routes,index) => (
                <ListItemButton key={index} component={Link} to={routes.url} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={routes.label} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </Box>
  );
}
export default DrawerLayout;
