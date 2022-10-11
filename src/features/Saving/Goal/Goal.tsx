import {GoalType, updateGoalCurrentSum} from "../saving-reducer";
import {Button, TextField} from "@mui/material";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {useDispatch} from "react-redux";
import styles from "./Goal.module.css";
import saveImg from "../../../assets/images/goal/save.jpg";
import achievedImg from "../../../assets/images/goal/target.jpg";
import {GoalTitle} from "./GoalTitle/GoalTitle";


type PropsType = { goal: GoalType }

export const Gaol = ({goal}: PropsType) => {
    const dispatch = useDispatch();
    const [currentSum, setCurrentSum] = useState("");
    const [error, setError] = useState("");

    const maxSum = 1000000000000;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value < maxSum) {
            setCurrentSum(e.currentTarget.value);
            setError("");
        } else if (+e.currentTarget.value > maxSum) {
            setError("Maximum value is 1000.000.000.000");
        }
    }

    const updateCurrentSum = () => {
        let isAchieved = (+currentSum + goal.goalCurrentSum) >= goal.goalObjSum;
        dispatch(updateGoalCurrentSum(goal.goalId, +currentSum, isAchieved));
        setCurrentSum("");
    }


    const onAddClickHandler = () => {
        updateCurrentSum();
    }


    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            updateCurrentSum();
        }
    }

    return (
        <div className={styles.mainGoalContainer}>
            <div className={styles.goalContainer}>
                {goal.isAchieved
                    ? <div className={styles.imgContainer} style={{backgroundImage: `url(${achievedImg})`}}></div>
                    : <div className={styles.imgContainer} style={{backgroundImage: `url(${saveImg})`}}></div>
                }
            </div>
            <div className={goal.isAchieved ? styles.achievedContainer : styles.goalContainer}>

                <GoalTitle goalId={goal.goalId} goalTitle={goal.goalTitle}/>
                <div className={styles.target}>
                    <span>Target: </span> <span>{goal.goalObjSum}</span>
                </div>
                <div className={styles.target}>
                    <span>Savings: </span> <span>{goal.goalCurrentSum}</span>
                </div>
                <div className={styles.target}>
                    <TextField
                        label={"save more"}
                        variant="outlined"
                        size="small"
                        value={currentSum}
                        type={"number"}
                        InputProps={{inputProps: {min: 0, max: maxSum}}}
                        onChange={onChangeHandler}
                        onKeyDown={onKeyDownHandler}
                    />
                    {error && <div style={{color: "red"}}>{error}</div>}
                    <Button onClick={onAddClickHandler}
                            variant={"contained"}
                            size="small"
                        //@ts-ignore
                            disabled={error}
                    >Add saving</Button>
                </div>
                {goal.isAchieved && <span className={styles.achievedText}>ACHIEVED</span>}
            </div>
        </div>
    )
}
