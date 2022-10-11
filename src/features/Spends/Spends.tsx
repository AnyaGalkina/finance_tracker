import React, {useCallback} from "react";
import {addSpendAC, removeSpendAC, SumType} from "./spend-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/redux/store";
import {decreaseTotalSumAC, increaseTotalSumAC, SvgComponentType, TotalSumType} from "./totalSpends-reducer";
import FinanceTracker from "../../common/components/FinanceTracker/FinanceTracker";

export const Spends: React.FC = () => {
    console.log("Spends");
    const spends = useSelector<AppRootStateType, SumType[]>(state => state.spends);
    const totalSpends = useSelector<AppRootStateType, TotalSumType[]>(state => state.totalSpends);
    const dispatch = useDispatch();

    const addSpend = useCallback((categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => {
        dispatch(addSpendAC(categoryId, categoryName, sum, component));
        dispatch(increaseTotalSumAC(categoryId, sum))
        },
        [])


    const removeSpend =  useCallback((categoryId: string, id: string, sum: number) => {
        dispatch(removeSpendAC(id, sum));
        dispatch(decreaseTotalSumAC(categoryId, sum));
    }, [])


    return (
        <div>
            <FinanceTracker
                addItem={addSpend}
                totalSum={totalSpends}
                title={"SPENDS"}
                sum={spends}
                removeItem={removeSpend}
            />
        </div>
    );
};
