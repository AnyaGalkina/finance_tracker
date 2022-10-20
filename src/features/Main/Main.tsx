import React from "react";
import styles from "./Main.module.css";
import savingImage from "../../assets/images/savingImg.jpg";
import incomeImage from "../../assets/images/incomeImg.jpg";
import spendingImage from "../../assets/images/spends.jpg";
import MainItem from "./MainItem/MainItem";
import {ROUTES} from "../../common/enums/routes-enum";


const Main = () => {
    return (
        <div className={styles.containerBlock}>
            <div className={styles.container}>
                <MainItem itemTitle={"ADD SPENDS"} path={ROUTES.SPENDS} img={spendingImage}/>
                <MainItem itemTitle={"ADD INCOME"} path={ROUTES.INCOME} img={incomeImage}/>
                <MainItem itemTitle={"START SAVING"} path={ROUTES.SAVINGS} img={savingImage}/>
            </div>
        </div>
    );
};

export default Main;