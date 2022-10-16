import React, {memo} from "react";
import {TotalSumType} from "../../../../features/Spends/totalSpends-reducer";
import styles from "./IconsList.module.css";
import {IconItem} from "./IconList/IconList";

type PropsType = {
    addSum: (categoryId: string, categoryName: string) => void;
    totalSum: TotalSumType[];
}

const IconsList = memo(({addSum, totalSum}: PropsType) => {

    const addSumHandler= (categoryId: string, categoryName: string) => {
        addSum(categoryId, categoryName,);
    }
    return (
        <div className={styles.container}>
            {totalSum.map(s => <IconItem addSum={addSumHandler} totalSum={s}/>)}
        </div>
    );
});

export default IconsList;