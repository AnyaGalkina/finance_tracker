import {GoalType, updateGoalCurrentSum} from "../saving-reducer";
import {Button} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import styles from "../NewGoal/NewGoal.module.css";

type PropsType = { goal: GoalType }

export const Gaol = ({goal}: PropsType) => {
    const dispatch = useDispatch();
    const [currentSum, setCurrentSum] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentSum(e.currentTarget.value);
    }

    const onAddClickHandler = () => {
        let newSavingSum = +currentSum + goal.goalCurrentSum;
        let isAchieved = newSavingSum >= goal.goalObjSum;
        dispatch(updateGoalCurrentSum(goal.goalId, newSavingSum, isAchieved));
    }

    return (
        <div>
            <span>{goal.goalTitle}</span>
            <span>Objective amount: {goal.goalObjSum}</span>
            {goal.isAchieved && <span>Achieved</span>}
            <input
                type={"number"}
                value={currentSum}
                onChange={onChangeHandler}
                className={styles.input}
                min={0}
                max={Infinity}
            />
            <Button onClick={onAddClickHandler}>Add saving</Button>
        </div>
    )
}
