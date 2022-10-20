import React, {useState} from "react";
import {ROUTES} from "../../enums/routes-enum";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SavingsSharpIcon from "@mui/icons-material/SavingsSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import PaymentsIcon from "@mui/icons-material/Payments";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {NavItem} from "./NavItem/NavItem";
import {SvgComponentType} from "../../../features/Spends/totalSpends-reducer";

interface Props {
    window?: () => Window;
}

export type NavItemType = {
    item: string;
    path: any;
    imgComponent: SvgComponentType;
}

const navItems: NavItemType[] = [
    {item: "Home", path: ROUTES.HOME, imgComponent: HomeIcon},
    {item: "Spends", path: ROUTES.SPENDS, imgComponent: ShoppingCartIcon},
    {item: "Income", path: ROUTES.INCOME, imgComponent: PaymentsIcon},
    {item: "Savings", path: ROUTES.SAVINGS, imgComponent: SavingsSharpIcon},
    {item: "Relax and play", path: ROUTES.GAME, imgComponent: SportsEsportsIcon},
];


export const Header = (props: Props) => {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

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
                    <NavItem nav={nav} key={index}/>
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