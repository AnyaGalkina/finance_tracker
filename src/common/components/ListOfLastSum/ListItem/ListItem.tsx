import React, {memo} from "react";
import styles from "./ListItem.module.css";
import {SvgIcon} from "@mui/material";
import {SvgComponentType} from "../../../../features/Spends/totalSpends-reducer";

type PropsType = {
    categoryId: string;
    id: string;
    component: SvgComponentType;
    sum: number;
    categoryName: string;
    removeItem: (categoryId: string, id: string, sum: number) =>  void
}

const ListItem: React.FC<PropsType> = memo(({
                                                id, categoryName, component, sum, removeItem, categoryId
}) => {
    console.log("ListItem")
    const onClickHandler = () => {
        removeItem(categoryId, id, sum)
    }

    return (
        <div className={styles.list}>
            <SvgIcon
                component={component}
                inheritViewBox
            />

            <span className={styles.title}>{categoryName}</span>
            <span className={styles.sum}>{sum}</span>
            <button className={styles.button} onClick={onClickHandler}>X</button>
        </div>
    )
})

export default ListItem;