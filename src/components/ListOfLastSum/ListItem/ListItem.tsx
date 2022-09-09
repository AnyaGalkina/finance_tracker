import React, {memo} from "react";
import styles from "./ListItem.module.css";
import {SvgIcon} from "@mui/material";
import {SvgComponentType} from "../../../redux/totalSpends-reducer";

type PropsType = {
    key: string;
    categoryId: string;
    id: string;
    component: SvgComponentType;
    sum: number;
    categoryName: string;
    removeItem: (categoryId: string, id: string, sum: number) =>  void
}

const ListItem: React.FC<PropsType> = memo(({
                                           key, id, categoryName, component, sum, removeItem, categoryId
}) => {
    console.log("ListItem")
    const onClickHandler = () => {
        removeItem(categoryId, id, sum)
    }

    return (
        <div key={key} className={styles.list}>
            <SvgIcon
                component={component}
                inheritViewBox
                // color={s.color}
            />

            <span>{categoryName}</span>
            <span>{sum}</span>
            <button onClick={onClickHandler}>X</button>
        </div>
    )
})

export default ListItem;