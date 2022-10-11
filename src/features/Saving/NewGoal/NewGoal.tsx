import {useDispatch} from "react-redux";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import EditableSpan from "../../../common/components/EditableSpan/EditableSpan";
import styles from "./NewGoal.module.css";
import {TextField} from "@mui/material";
import {setNewGoal} from "../saving-reducer";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../common/enums/routes-enum";
import {BasicModal} from "./Modal/Modal";

export const NewGoal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [goalTitle, setGoalTitle] = useState("");
    const [objSum, setObjSum] = useState("");
    const [error, setError] = useState("");
    const [open, setOpen] = useState(true);

    const maxSum = 1000000000000;

    const onNewGoalClickHandler = () => {
        let objSumNum = +objSum;
        dispatch(setNewGoal(goalTitle, objSumNum));
        navigate(ROUTES.SAVINGS);
    };

    // const changeTitleName = (changedTitleName: string) => {
    //     setGoalTitle(changedTitleName);
    // }

    const changeTitleName = (e: ChangeEvent<HTMLInputElement>) => {
        setGoalTitle(e.currentTarget.value);
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
                title={"CREATE NEW GOAL"}
                open={open}
                buttonTitle={"Create goal"}
                onSaveClickHandler={onNewGoalClickHandler}
                error={error}
                onCancelClickHandler={onCancelClickHandler}
                onClickOutsideHandler={onClickOutsideHandler}
            >
                <TextField
                    label={"goal name"}
                    variant="outlined"
                    size="small"
                    value={goalTitle}
                    onChange={changeTitleName}
                />
                {/*<EditableSpan*/}
                {/*    title={goalTitle}*/}
                {/*    changeTitleName={changeTitleName}*/}
                {/*    className={styles.editableSpan}*/}
                {/*    maxSymbols={25}*/}
                {/*    label={"goal name"}*/}
                {/*/>*/}
                <h4>Target amount:</h4>
                <div className={styles.input}>
                    <TextField
                        label={null}
                        variant="outlined"
                        size="small"
                        value={objSum}
                        type={"number"}
                        InputProps={{inputProps: {min: 0, max: maxSum}}}
                        onChange={onChangeHandler}
                    />
                    {error && <div style={{color: "red"}}>{error}</div>}
                </div>
            </BasicModal>
        </div>
    )
}