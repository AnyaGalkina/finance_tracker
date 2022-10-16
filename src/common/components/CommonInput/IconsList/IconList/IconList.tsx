import {changeCategoryNameAC, TotalSumType} from "../../../../../features/Spends/totalSpends-reducer";
import React, {memo} from "react";
import {useDispatch} from "react-redux";
import styles from "../IconsList.module.css";
import {SvgIcon} from "@mui/material";
import {categoriesImg} from "../../../../../app/redux/categoryId";
import EditableSpan from "../../../EditableSpan/EditableSpan";

type IconItemPropsType = {
    addSum: (categoryId: string, categoryName: string) => void;
    totalSum: TotalSumType;
}

export const IconItem = memo(({addSum, totalSum}: IconItemPropsType) => {
    const dispatch = useDispatch();
    const {categoryId, categoryName} = totalSum;

    const changeCategoryNameHandler = (categoryName: string) => {
        dispatch(changeCategoryNameAC(categoryId, categoryName))
    }

    const addSpendHandler = () => {
        addSum(categoryId, categoryName);
    }

    return (
        <div className={styles.img} key={categoryId}>
            <SvgIcon
                component={categoriesImg[categoryId].component}
                inheritViewBox
                color={categoriesImg[categoryId].color}
                sx={{fontSize: 80}}
                onClick={addSpendHandler}
            />
            <EditableSpan
                className={styles.title}
                title={categoryName}
                changeTitleName={changeCategoryNameHandler}
                maxSymbols={25}
                label={null}
            ></EditableSpan>
        </div>

    )
});