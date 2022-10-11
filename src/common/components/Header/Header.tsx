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
import {NavLink} from "react-router-dom";
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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}} style={{width: "240px"}}>
            <Typography variant="h6" sx={{my: 2}}>
                FINANCE TRACKER
            </Typography>
            <Divider/>
            <List>
                {navItems.map((nav, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{textAlign: "center"}}>
                            <NavLink to={nav.path} className={styles.link}>{nav.item}</NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: "flex"}}>
            <AppBar component="nav" style={{backgroundColor: "white", boxShadow:"none"}}>
                <Toolbar style={{marginLeft: "1%"}}>
                    <IconButton
                        // color="inherit"
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