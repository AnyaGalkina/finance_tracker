import React from "react";
import {SpendStateType} from "../../reducers/spend-reducer";
import EditableSpan from "../EditableSpan/EditableSpan";
import {SvgIcon} from "@mui/material";
import styles from "./ListOfLastSpends.module.css";

type PropsType = {
    spends: SpendStateType[];
    removeSpend: (id: string) => void;
}


const ListOfLastSums: React.FC<PropsType> = ({spends, removeSpend}) => {


    return (
        <div>
            {spends.map(s => {

                const onClickHandler = () => {
                    removeSpend(s.id)
                }

                return (
                    <div key={s.id} className={styles.list}>
                        <SvgIcon
                            component={s.component}
                            inheritViewBox
                            // color={s.color}
                            // sx={{fontSize: 80}}
                            // onClick={addSpendHandler}
                        />
                        <span>{s.category}</span>
                        <span>{s.sum}</span>
                        <button onClick={onClickHandler}>X</button>
                    </div>
                )
            })}
        </div>
    )
};

export default ListOfLastSums;
