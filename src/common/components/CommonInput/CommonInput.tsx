import React, {ChangeEvent, memo, useCallback, useRef, useState} from "react";
import IconsList from "./IconsList/IconList";
import {SvgComponentType, TotalSumType} from "../../../features/Spends/totalSpends-reducer";
import styles from "./CommonInput.module.css";
import {TextField} from "@mui/material";


type PropsType = {
    addItem: (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
    title: string;
}

const CommonInput = memo(({addItem, totalSum, title}: PropsType) => {
    console.log("CommonInput")

    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const maxSum = 1000000000000;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const valueRef = useRef("");
    valueRef.current = value;

    const addSumHandler = useCallback((categoryId: string, categoryName: string, component: SvgComponentType) => {
        if (+valueRef.current > 0 && +valueRef.current < maxSum) {
            addItem(categoryId, categoryName, +valueRef.current, component)
            setValue("");
            setError("");
        } else if (+valueRef.current > maxSum) {
            setValue("");
            setError("Maximum value is 1000.000.000.000");
        } else {
            setError("Add sum and choose category");
        }
    }, [addItem])


    return (
        <div className={styles.commonInputContainer}>
            <h2>ADD {title}</h2>

            <div className={styles.input}>
                <TextField
                    label={null}
                    variant="outlined"
                    size="small"
                    value={value}
                    type={"number"}
                    InputProps={{inputProps: {min: 0, max: maxSum}}}
                    onChange={onChangeHandler}
                />
            </div>
            {error ? <div className={styles.error}>{error}</div> : <div className={styles.error}></div>}
            <div className={styles.container}>
                <IconsList
                    totalSum={totalSum}
                    addSum={addSumHandler}
                />
            </div>
        </div>
    );
});

export default CommonInput;