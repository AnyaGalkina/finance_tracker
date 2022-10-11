import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/redux/store";
import styles from "./AvailableMoneyTracker.module.css";

const AvailableMoneyTracker: React.FC = () => {
    const currentMoneySum = useSelector<AppRootStateType, number>(state => state.availableMoney.currentMoneySum);

    return (
            <div className={styles.moneyContainer}>
                <h4 >My money</h4>
                <p>{currentMoneySum}</p>
            </div>
    );
};

export default AvailableMoneyTracker;