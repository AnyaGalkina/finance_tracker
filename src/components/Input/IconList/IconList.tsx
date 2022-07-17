import React from "react";
import {SvgIcon} from "@mui/material";
import {TotalSpendsStateType} from "../../reducers/totalSpends-reducer";
import EditableSpan from "../EditableSpan/EditableSpan";
import Input from "../Input/Input";


// import Icon from "./Icon/Icon";



type PropsType = {
    totalSpendsState: TotalSpendsStateType[];
    addSpend: (id: string,  category: string) => void;
    changeCategoryName: (id: string, category: string) => void;
}


const IconList: React.FC<PropsType> = ({totalSpendsState,changeCategoryName, addSpend}) => {


    return (
        <div>
            {totalSpendsState.map(s => {

                 const changeCategoryNameHandler = (category: string) => {
                     changeCategoryName(s.id, category)
                 }
                 const addSpendHandler = () => {
                     addSpend(s.id, s.categoryName);
                 }

                 return(
                     <div>
                         <SvgIcon
                             key={s.id}
                             component={s.component}
                             inheritViewBox
                             color={s.color}
                             sx={{fontSize: 80}}
                             onClick={addSpendHandler}
                         />
                         <EditableSpan title={s.categoryName}
                                       changeTitleName={changeCategoryNameHandler}
                         ></EditableSpan>
                     </div>
             )
             })}
        </div>
    );
};

export default IconList;