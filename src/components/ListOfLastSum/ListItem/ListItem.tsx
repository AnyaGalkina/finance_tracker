import React from "react";
import styles from "./ListItem.module.css";
import {SvgIcon} from "@mui/material";
import {SvgComponentType} from "../../../redux/totalSpends-reducer";
import {useDispatch} from "react-redux";
import {RemoveIncomeType} from "../../../redux/income-reducer";

class RemoveSpendType {
}

type PropsType = {
    key: string;
    categoryId: string;
    id: string;
    component: SvgComponentType;
    sum: number;
    categoryName: string;
   removeItem: (id: string) => RemoveSpendType |  RemoveIncomeType;
}

const ListItem: React.FC<PropsType> = ({
                                           key, id, categoryName, component, sum, removeItem
}) => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        //@ts-ignore
        dispatch(removeItem(id));
        // removeSpend(s.id)
    }

    return (
        <div key={id} className={styles.list}>
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
}

export default ListItem;