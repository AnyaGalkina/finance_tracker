import React, {memo, useCallback} from "react";
import {SumType} from "../../redux/spend-reducer";
import ListOfLastSums from "../ListOfLastSum/ListOfLastSums";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import CommonInput from "../CommonInput/CommonInput";
import styles from "./FinanceTracker.module.css";

type PropsType = {
    addItem: (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
    title: string;
    sum: SumType[];
    removeItem: (categoryId: string, id: string, sum: number) => void;
}

export const FinanceTracker = memo(({title, sum, removeItem, addItem, totalSum}: PropsType) => {
    console.log("FinanceTracker");

    const addItemHandler = useCallback( (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => {
        addItem(categoryId, categoryName, sum, component)
    }, [])

    const removeItemHandler = useCallback((categoryId: string, id: string, sum: number) => {
        removeItem(categoryId, id, sum);
    }, [])

    return (
        <div className={styles.mainBlock}>

            <CommonInput
                totalSum={totalSum}
                addItem={addItemHandler}
                title={title}
            />
            <ListOfLastSums
                sum={sum}
                removeItem={removeItemHandler}
                itemName={title}
            />
        </div>
    );
})

export default FinanceTracker;