import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteGoal} from "../../saving-reducer";
import {useDispatch} from "react-redux";
import styles from "./GoalTitle.module.css";

type PropsType = {
    goalTitle: string;
    goalId: string;
}

export const GoalTitle = ({goalTitle, goalId }: PropsType) => {
    const dispatch = useDispatch();

    const onRemoveClickHandler = () => {
        debugger
        dispatch(deleteGoal(goalId));
    };

    return (
        <div className={styles.goalTitleContainer}>
            <h3>{goalTitle}</h3>

            <div className={styles.iconsContainer}>
                <IconButton aria-label="delete" onClick={onRemoveClickHandler}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </div>
        </div>
    );
};
