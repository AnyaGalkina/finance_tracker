import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

const AvailableMoneyTracker: React.FC = () => {
    console.log("AvailableMoneyTracker");
    const currentMoneySum = useSelector<AppRootStateType, number>(state => state.availableMoney.currentMoneySum);

    return (
        <div>
            <h4>My money</h4>
            <p>{currentMoneySum}</p>
        </div>
    );
};

export default AvailableMoneyTracker;