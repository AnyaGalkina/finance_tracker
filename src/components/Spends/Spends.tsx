import React, {useCallback} from "react";
import {addSpendAC, removeSpendAC, SumType} from "../../redux/spend-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import FinanceTracker from "../FinanceTracker/FinanceTracker";

export const Spends: React.FC = () => {
    console.log("Spends");
    const spends = useSelector<AppRootStateType, SumType[]>(state => state.spends);
    const totalSpends = useSelector<AppRootStateType, TotalSumType[]>(state => state.totalSpends);
    const dispatch = useDispatch();

    const addSpend = useCallback((categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => {
        dispatch(addSpendAC(categoryId, categoryName, sum, component))}, [])


    const removeSpend =  useCallback((id: string, sum: number) => {
        dispatch(removeSpendAC(id, sum))
    }, [])

    return (
        <div>
            <FinanceTracker
                addItem={addSpend}
                totalSum={totalSpends}
                title={"Add spends"}
                sum={spends}
                removeItem={removeSpend}
            />
        </div>
    );
};



