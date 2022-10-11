import React, {memo, useCallback} from "react";
import {SumType} from "../../../features/Spends/spend-reducer";
import ListOfLastSums from "../ListOfLastSum/ListOfLastSums";
import {SvgComponentType, TotalSumType} from "../../../features/Spends/totalSpends-reducer";
import CommonInput from "../CommonInput/CommonInput";
import styles from "./FinanceTracker.module.css";
import ChartDounat from "../Chart/ChartDounat";

type PropsType = {
    addItem: (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
    title: string;
    sum: SumType[];
    removeItem: (categoryId: string, id: string, sum: number) => void;
}

export const FinanceTracker = memo(({title, sum, removeItem, addItem, totalSum}: PropsType) => {

    const addItemHandler = useCallback( (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => {
        addItem(categoryId, categoryName, sum, component)
    }, []);

    const removeItemHandler = useCallback((categoryId: string, id: string, sum: number) => {
        removeItem(categoryId, id, sum);
    }, []);

    return (
        <div className={styles.mainBlock}>
            <CommonInput
                totalSum={totalSum}
                addItem={addItemHandler}
                title={title}
            />
            <div className={styles.chartBlock}>
                <h3>LAST {title}</h3>
                {sum.length < 1 ? <div><span>You dont have {title.toLowerCase()} yet.</span></div> :  <ChartDounat totalSum={totalSum}/> }
                <ListOfLastSums
                    sum={sum}
                    removeItem={removeItemHandler}
                    itemName={title}
                />
            </div>
        </div>
    );
})

export default FinanceTracker;