import {useDispatch} from "react-redux";
import React, {ChangeEvent, useState} from "react";
import EditableSpan from "../../../common/components/CommonInput/EditableSpan/EditableSpan";
import styles from "./NewGoal.module.css";
import {Button} from "@mui/material";
import {setNewGoal} from "../saving-reducer";
import {useNavigate} from "react-router-dom";
import { ROUTES } from "../../../common/enums/routes-enum";

export const NewGoal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [goalTitle, setGoalTitle] = useState("my goal");
    const [objSum, setObjSum] = useState("");

    const onNewGoalClickHandler = () => {
        let objSumNum = +objSum;
        dispatch(setNewGoal(goalTitle, objSumNum));
        navigate(ROUTES.SAVINGS);
    };

    const changeTitleName = (changedTitleName: string) => {
        setGoalTitle(changedTitleName);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setObjSum(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <h4>NEW GOAL:</h4>
                <EditableSpan
                    title={goalTitle}
                    changeTitleName={changeTitleName}
                    className={styles.editableSpan}
                />
            </div>
            <h4>Objective amount</h4>
            <input
                type={"number"}
                value={objSum}
                onChange={onChangeHandler}
                className={styles.input}
                min={0}
                max={Infinity}
            />
            <Button onClick={onNewGoalClickHandler}>Create goal</Button>
        </div>
    )
}