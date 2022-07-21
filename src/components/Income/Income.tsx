import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {addIncomeAC, removeIncomeAC} from "../../redux/income-reducer";
import {TotalSumType} from "../../redux/totalSpends-reducer";
import {SumType} from "../../redux/spend-reducer";
import FinanceTracker from "../FinanceTracker/FinanceTracker";

const Income: React.FC = () => {

    const income = useSelector<AppRootStateType, SumType[]>(state => state.income);
    const totalIncome = useSelector<AppRootStateType, TotalSumType[]>(state => state.totalIncome);

    return (
        <FinanceTracker
            addItem={addIncomeAC}
            totalSum={totalIncome}
            title={"Add income"}
            sum={income}
            removeItem={removeIncomeAC}
        />
    );
};

export default Income;