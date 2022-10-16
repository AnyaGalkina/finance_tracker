import React, {memo, useCallback} from "react";
import {SumType} from "../../../features/Spends/spend-reducer";
import ListItem from "./ListItem/ListItem";
import styles from "./ListOfLastSums.module.css";


type PropsType = {
    sum: SumType[];
    removeItem: (categoryId: string, id: string, sum: number) =>  void;
    itemName:string
}

const ListOfLastSums = memo(({sum, removeItem, itemName }: PropsType) => {

    const removeItemHandler = useCallback((categoryId: string, id: string, sum: number) => {
        removeItem(categoryId, id, sum)
    },[])

    return (
        <div className={styles.listContainer}>
            {sum.map(s => {

                return (
                    <ListItem
                        key={s.id}
                        categoryName={s.categoryName}
                        sum={s.sum}
                        removeItem={removeItemHandler}
                        id={s.id}
                        categoryId={s.categoryId}
                    />
                )
            })}
        </div>
    )
});

export default ListOfLastSums;
