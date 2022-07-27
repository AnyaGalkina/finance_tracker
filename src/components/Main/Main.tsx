import React from "react";
import styles from "./Main.module.css";
import {useNavigate} from "react-router-dom";
import savingImage from "../../images/savingImg.jpg";
import incomeImage from "../../images/incomeImg.jpg";
import spendingImage from "../../images/Wavy_Bus-41_Single-05.jpg";



const Main = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.containerBlock}>
            <div className={styles.container}>
                <div className={styles.mainBlock}
                     style={{backgroundImage: `url(${spendingImage})`, backgroundPosition: 'center',
                         backgroundSize: 'cover',
                     }}
                     onClick={() => {
                         navigate("/spends")
                     }}
                >Add Spends
                </div>
                <div className={styles.mainBlock}
                     onClick={() => {
                         navigate('/income')
                     }}
                     style={{backgroundImage: `url(${incomeImage})`, backgroundPosition: 'center',
                         backgroundSize: 'cover',
                     }}
                >Add Income
                </div>
            </div>
            <div
                className={styles.savings}
                onClick={() => {
                    navigate("/savings")
                }}
                style={{backgroundImage: `url(${savingImage})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >Start Savings</div>
        </div>
    );
};

export default Main;