import React, {memo} from "react";
import {SvgIcon} from "@mui/material";
import {changeCategoryNameAC, SvgComponentType, TotalSumType} from "../../../redux/totalSpends-reducer";
import EditableSpan from "../EditableSpan/EditableSpan";
import styles from "./IconsList.module.css";
import {useDispatch} from "react-redux";


type PropsType = {
    addSum: (categoryId: string, categoryName: string, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
}

const IconsList = memo(({addSum, totalSum}: PropsType) => {
    console.log("IconList")

    const addSumHandler= (categoryId: string, categoryName: string, component: SvgComponentType) => {
        addSum(categoryId, categoryName, component);
    }

    return (
        <div className={styles.container}>
            {totalSum.map(s => <IconItem addSum={addSumHandler} totalSum={s}/>)}
        </div>
    );
});

export default IconsList;

type IconItemPropsType = {
    addSum: (categoryId: string, categoryName: string, component: SvgComponentType) => void;
    totalSum: TotalSumType;
}

export const IconItem = memo(({addSum, totalSum}: IconItemPropsType) => {
    const dispatch = useDispatch();
    const {categoryId, categoryName, component, color} = totalSum;

    const changeCategoryNameHandler = (categoryName: string) => {
        dispatch(changeCategoryNameAC(categoryId, categoryName))
    }

    const addSpendHandler = () => {
        addSum(categoryId, categoryName, component);
    }

    return (
        <div className={styles.img} key={categoryId}>
            <SvgIcon
                component={component}
                inheritViewBox
                color={color}
                sx={{fontSize: 80}}
                onClick={addSpendHandler}
            />
            <EditableSpan
                className={styles.title}
                title={categoryName}
                changeTitleName={changeCategoryNameHandler}
            ></EditableSpan>
        </div>

    )
});