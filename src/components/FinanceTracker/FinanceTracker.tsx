import React, {memo, useCallback} from "react";
import Input from "../CommonInput/CommonInput";
import {SumType} from "../../redux/spend-reducer";
import ListOfLastSums from "../ListOfLastSum/ListOfLastSums";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import CommonInput from "../CommonInput/CommonInput";

type PropsType = {
    addItem: (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
    title: string;
    sum: SumType[];
    removeItem: (id: string, sum: number) => void;
}

export const FinanceTracker = memo(({title, sum, removeItem, addItem, totalSum}: PropsType) => {
    console.log("FinanceTracker");

    const addItemHandler = useCallback( (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => {
        addItem(categoryId, categoryName, sum, component)
    }, [])

    const removeItemHandler = useCallback((id: string, sum: number) => {
        removeItem(id, sum);
    }, [])

    return (
        <div>
            <h2>{title}</h2>
            <CommonInput
                totalSum={totalSum}
                addItem={addItemHandler}
            />
            <ListOfLastSums
                sum={sum}
                removeItem={removeItemHandler}
            />
        </div>
    );
})

export default FinanceTracker;