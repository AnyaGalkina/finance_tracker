import {useDispatch} from "react-redux";
import React, {ChangeEvent, useState} from "react";
import EditableSpan from "../../../common/components/CommonInput/EditableSpan/EditableSpan";
import styles from "./NewGoal.module.css";
import {TextField} from "@mui/material";
import {setNewGoal} from "../saving-reducer";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../common/enums/routes-enum";
import {BasicModal} from "./Modal";

export const NewGoal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [goalTitle, setGoalTitle] = useState("my goal");
    const [objSum, setObjSum] = useState("");
    const [error, setError] = useState("");
    const [open, setOpen] = useState(true);

    const maxSum = 1000000000000;

    const onNewGoalClickHandler = () => {
        let objSumNum = +objSum;
        dispatch(setNewGoal(goalTitle, objSumNum));
        navigate(ROUTES.SAVINGS);
    };

    const changeTitleName = (changedTitleName: string) => {
        setGoalTitle(changedTitleName);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value < maxSum) {
            setObjSum(e.currentTarget.value);
            setError("");
        } else if (+e.currentTarget.value > maxSum) {
            setError("Maximum value is 1000.000.000.000");
        }
    }


    const closeModal = () => {
        setError("");
        setOpen(false);
        navigate(ROUTES.SAVINGS);
    }

    const onCancelClickHandler = () => {
        closeModal();
    }

    const onClickOutsideHandler = () => {
        closeModal();
    }

    return (
        <div>
            <BasicModal
                title={"NEW GOAL:"}
                open={open}
                buttonTitle={"Create goal"}
                onSaveClickHandler={onNewGoalClickHandler}
                error={error}
                onCancelClickHandler={onCancelClickHandler}
                onClickOutsideHandler={onClickOutsideHandler}
            >
                <EditableSpan
                    title={goalTitle}
                    changeTitleName={changeTitleName}
                    className={styles.editableSpan}
                    maxSymbols={25}
                    label={"my goal"}
                />
                <h4>Objective amount</h4>
                <div className={styles.input}>
                    <TextField
                        label={"my goal"}
                        variant="outlined"
                        size="small"
                        value={objSum}
                        type={"number"}
                        InputProps={{inputProps: {min: 0, max: maxSum}}}
                        onChange={onChangeHandler}
                    />
                    {error && <div style={{color: "red"}}>{error}</div>}
                </div>
                {/*<Button onClick={onNewGoalClickHandler}*/}
                {/*        variant={"contained"}*/}
                {/*    //@ts-ignore*/}
                {/*        disabled={error}>*/}
                {/*    Create goal*/}
                {/*</Button>*/}
            </BasicModal>
        </div>
    )
}