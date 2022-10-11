import React from "react";
import styles from "./Main.module.css";
import savingImage from "../../assets/images/savingImg.jpg";
import incomeImage from "../../assets/images/incomeImg.jpg";
// import spendingImage from "../../assets/images/Wavy_Bus-41_Single-05.jpg";
import spendingImage from "../../assets/images/10089.jpg";
import MainItem from "./MainItem/MainItem";
import {ROUTES} from "../../common/enums/routes-enum";


const Main = () => {
    return (
        <div className={styles.containerBlock}>
            <div className={styles.container}>
                <MainItem itemTitle={"Add Spends"} path={ROUTES.SPENDS} img={spendingImage}/>
                <MainItem itemTitle={"Add Income"} path={ROUTES.INCOME} img={incomeImage}/>
                <MainItem itemTitle={"Start Savings"} path={ROUTES.SAVINGS} img={savingImage}/>
            </div>
        </div>
    );
};

export default Main;