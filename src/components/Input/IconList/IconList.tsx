import React from "react";
import {SvgIcon} from "@mui/material";
import {changeCategoryNameAC, SvgComponentType, TotalSpendsStateType} from "../../../redux/totalSpends-reducer";
import EditableSpan from "../../EditableSpan/EditableSpan";
import styles from "./IconList.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";


type PropsType = {
    addSpend: (id: string,  category: string, component: SvgComponentType) => void;
}


const IconList: React.FC<PropsType> = ({addSpend}) => {

    const dispatch = useDispatch();
    const totalSpends = useSelector<AppRootStateType, TotalSpendsStateType[]>(state => state.totalSpends);



    return (
        <div className={styles.container}>
            {totalSpends.map(s => {

                 const changeCategoryNameHandler = (category: string) => {
                     debugger
                     dispatch(changeCategoryNameAC(s.id, category))
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