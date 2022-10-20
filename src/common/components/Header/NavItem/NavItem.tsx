import React from "react";
import styles from "../Header.module.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {NavLink, useNavigate} from "react-router-dom";
import {NavItemType} from "../Header";
import {ListItemIcon, SvgIcon} from "@mui/material";

type PropsType = {
    nav: NavItemType;
}

export const NavItem = ({nav}: PropsType) => {
    const navigate = useNavigate();

    return (
        <div className={styles.link}>
            <ListItem disablePadding onClick={() => {
                navigate(nav.path)
            }}>
                <ListItemButton sx={{textAlign: "center"}}>
                    <ListItemIcon>
                        <SvgIcon
                            component={nav.imgComponent}
                            inheritViewBox
                            color={"primary"}
                        />
                    </ListItemIcon>
                    <NavLink
                        to={nav.path}
                        className={({isActive}) => isActive ? styles.linkActive : styles.link}
                    >
                        {nav.item}
                    </NavLink>
                </ListItemButton>
            </ListItem>
        </div>
    );
};