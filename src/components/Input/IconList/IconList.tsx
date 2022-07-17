import React from "react";
import {SvgIcon} from "@mui/material";
import {SvgComponentType, TotalSpendsStateType} from "../../../reducers/totalSpends-reducer";
import EditableSpan from "../../EditableSpan/EditableSpan";
import styles from "./IconList.module.css";


type PropsType = {
    totalSpendsState: TotalSpendsStateType[];
    addSpend: (id: string,  category: string, component: SvgComponentType) => void;
    changeCategoryName: (id: string, category: string) => void;
}


const IconList: React.FC<PropsType> = ({totalSpendsState,changeCategoryName, addSpend}) => {

    return (
        <div className={styles.container}>
            {totalSpendsState.map(s => {

                 const changeCategoryNameHandler = (category: string) => {
                     debugger
                     changeCategoryName(s.id, category)
                 }
                 const addSpendHandler = () => {
                     addSpend(s.id, s.categoryName, s.component);
                 }

                 return(
                     <div className={styles.img} key={s.id}>
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