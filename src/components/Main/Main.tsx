import React from "react";
import styles from "./Main.module.css";
import savingImage from "../../images/savingImg.jpg";
import incomeImage from "../../images/incomeImg.jpg";
import spendingImage from "../../images/Wavy_Bus-41_Single-05.jpg";
import MainItem from "./MainItem/MainItem";


const Main = () => {
    return (
        <div className={styles.containerBlock}>
            <div className={styles.container}>
                <MainItem itemTitle={"Add Spends"} path={"/spends"} img={spendingImage}/>
                <MainItem itemTitle={"Add Income"} path={"/income"} img={incomeImage}/>
                <MainItem itemTitle={"Start Savings"} path={"/savings"} img={savingImage}/>
            </div>
        </div>
    );
};

export default Main;