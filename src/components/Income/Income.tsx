import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {addIncomeAC, removeIncomeAC} from "../../redux/income-reducer";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import {SumType} from "../../redux/spend-reducer";
import FinanceTracker from "../FinanceTracker/FinanceTracker";

const Income: React.FC = () => {
    console.log("Income");

    const income = useSelector<AppRootStateType, SumType[]>(state => state.income);
    const totalIncome = useSelector<AppRootStateType, TotalSumType[]>(state => state.totalIncome);
    const dispatch = useDispatch();

    const addIncome = useCallback((categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => {
        debugger
        dispatch(addIncomeAC(categoryId, categoryName, sum, component))}, [])

    const removeIncome =  useCallback((id: string, sum: number) => {
        dispatch(removeIncomeAC(id, sum))
    }, [])


    return (
        <FinanceTracker
            addItem={addIncome}
            totalSum={totalIncome}
            title={"Add income"}
            sum={income}
            removeItem={removeIncome}
        />
    );
};

export default Income;