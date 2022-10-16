import React from "react";
import pageError from "../../../assets/images/404Img/robot.jpg";
import styles from "./Page404.module.css";

export const PageNotFound = () => {
    return (
        <div>
           <img className={styles.img} src={pageError} alt={"page not found"}/>
        </div>
    );
};