import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/redux/store";
import {addIncomeAC, removeIncomeAC} from "./income-reducer";
import {decreaseTotalSumAC, increaseTotalSumAC, TotalSumType} from "../Spends/totalSpends-reducer";
import {SumType} from "../Spends/spend-reducer";
import FinanceTracker from "../../common/components/FinanceTracker/FinanceTracker";

const Income: React.FC = () => {

    const income = useSelector<AppRootStateType, SumType[]>(state => state.income);
    const totalIncome = useSelector<AppRootStateType, TotalSumType[]>(state => state.totalIncome);
    const dispatch = useDispatch();

    const addIncome = useCallback((categoryId: string, categoryName: string, sum: number) => {
        dispatch(addIncomeAC(categoryId, categoryName, sum));
        dispatch(increaseTotalSumAC(categoryId, sum));
    }, [dispatch])

    const removeIncome =  useCallback((categoryId: string, id: string, sum: number) => {
        dispatch(removeIncomeAC(id, sum));
        dispatch(decreaseTotalSumAC(categoryId, sum));
    }, [dispatch])


    return (
        <div>
            <FinanceTracker
                addItem={addIncome}
                totalSum={totalIncome}
                title={"INCOME"}
                sum={income}
                removeItem={removeIncome}
            />
        </div>
    );
};

export default Income;