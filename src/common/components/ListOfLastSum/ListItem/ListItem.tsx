import React, {memo} from "react";
import styles from "./ListItem.module.css";
import {SvgIcon} from "@mui/material";
import {categoriesImg} from "../../../../app/redux/categoryId";


type PropsType = {
    categoryId: string;
    id: string;
    sum: number;
    categoryName: string;
    removeItem: (categoryId: string, id: string, sum: number) => void
}

const ListItem: React.FC<PropsType> = memo(({id, categoryName, sum, removeItem, categoryId}) => {

    const onClickHandler = () => {
        removeItem(categoryId, id, sum)
    }

    return (
        <div className={styles.list}>
            <SvgIcon
                component={categoriesImg[categoryId].component}
                inheritViewBox
            />
            <div className={styles.title}>{categoryName}</div>
            <span className={styles.sum}>{sum}</span>
            <button className={styles.button} onClick={onClickHandler}>X</button>
        </div>
    )
})

export default ListItem;