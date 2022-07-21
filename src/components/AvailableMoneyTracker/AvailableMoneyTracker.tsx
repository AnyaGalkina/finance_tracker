import React from "react";
import {CurrentMoneyStateType} from "../../redux/availableMoney-reducer";

const AvailableMoneyTracker: React.FC<CurrentMoneyStateType > = ({currentMoneySum}) => {
    return (
        <div>
            <h4>My money</h4>
            <p>{currentMoneySum}</p>
        </div>
    );
};

export default AvailableMoneyTracker;