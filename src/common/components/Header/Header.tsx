import React, {useState} from "react";
import {ROUTES} from "../../enums/routes-enum";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavLink, useNavigate} from "react-router-dom";
import styles from "./Header.module.css";

interface Props {
    window?: () => Window;
}

const navItems = [{item: "Home", path: ROUTES.HOME}, {item: "Spends", path: ROUTES.SPENDS}, {
    item: "Income",
    path: ROUTES.INCOME
}, {item: "Savings", path: ROUTES.SAVINGS}];

export const Header = (props: Props) => {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}} style={{width: "250px"}}>
            <Typography variant="h6" sx={{my: 2}} color="primary">
                FINANCE TRACKER
            </Typography>
            <Divider/>
            <List>
                {navItems.map((nav, index) => (
                    <div className={styles.link} key={index}>
                        <ListItem disablePadding onClick={() => {
                            navigate(nav.path)
                        }}>
                            <ListItemButton sx={{textAlign: "center"}}>
                                <NavLink
                                    key={index}
                                    to={nav.path}
                                    className={({ isActive }) => isActive ? styles.linkActive : styles.link}
                                >{nav.item}
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    </div>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: "flex"}}>
            <AppBar component="nav" style={{backgroundColor: "white", boxShadow: "none"}}>
                <Toolbar style={{marginLeft: "10%"}}>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main">
                <Toolbar/>
            </Box>
        </Box>
    );
}


export default Header;