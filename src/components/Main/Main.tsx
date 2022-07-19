import React from "react";
import styles from "./Main.module.css";
import {useNavigate} from "react-router-dom";


const Main = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.containerBlock}>
            <div className={styles.container}>
                <div className={styles.mainBlock}
                     onClick={() => {
                         navigate("/spends")
                     }}
                >Add Spends
                </div>
                <div className={styles.mainBlock}
                     onClick={() => {
                         navigate('/income')
                     }}
                >Add Income
                </div>
            </div>
            <div
                className={styles.savings}
                onClick={() => {
                    navigate("/savings")
                }}
            >Start Savings</div>
        </div>
    );
};

export default Main;