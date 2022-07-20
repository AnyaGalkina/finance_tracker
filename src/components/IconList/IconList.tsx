import React from "react";
import {SvgIcon} from "@mui/material";
import {changeCategoryNameAC, SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import EditableSpan from "../EditableSpan/EditableSpan";
import styles from "./IconList.module.css";
import {useDispatch} from "react-redux";


type PropsType = {
    addSum: (categoryId: string, categoryName: string, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
}


const IconList: React.FC<PropsType> = ({addSum, totalSum}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            {totalSum.map(s => {

                 const changeCategoryNameHandler = (categoryName: string) => {
                     dispatch(changeCategoryNameAC(s.categoryId, categoryName))
                 }
                 const addSpendHandler = () => {
                     addSum(s.categoryId, s.categoryName, s.component);
                 }

                 return(
                     <div className={styles.img} key={s.categoryId}>
                         <SvgIcon
                             component={s.component}
                             inheritViewBox
                             color={s.color}
                             sx={{fontSize: 80}}
                             onClick={addSpendHandler}
                         />
                         <EditableSpan
                             className={styles.title}
                             title={s.categoryName}
                             changeTitleName={changeCategoryNameHandler}
                         ></EditableSpan>
                     </div>
             )
             })}
        </div>
    );
};

export default IconList;