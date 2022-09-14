import React, {ChangeEvent, memo, useCallback, useRef, useState} from "react";
import IconsList from "./IconsList/IconList";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import styles from "./CommonInput.module.css";


type PropsType = {
    addItem: (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
    title: string;
}

const CommonInput = memo(({addItem, totalSum, title}: PropsType) => {
    console.log("CommonInput")

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const valueRef = useRef("");
    valueRef.current = value;

    // const addSumHandler = (categoryId?: string, categoryName?: string, component?: SvgComponentType, value?: number) => {
    //     debugger
    //     addItem(categoryId, categoryName, value, component)
    // }

    const addSumHandler = useCallback((categoryId: string, categoryName: string, component: SvgComponentType) => {
        if (+valueRef.current > 0 && +valueRef.current < Infinity) {
            addItem(categoryId, categoryName, +valueRef.current, component)
            setValue("");
            setError("");
        // } else if (+valueRef.current > Infinity) {
        //     setValue("");
        //     setError("Maximum value is 1000.000.000.000");
        } else {
            setError("Add sum and choose category");
        }
    }, [addItem])


    return (
        <div>
            <h2>Add {title}</h2>
            <input
                className={styles.input}
                value={value}
                type={"number"}
                min={0}
                max={Infinity}
                onChange={onChangeHandler}
            />
            {error ? <div style={{color: "red"}}>{error}</div> : ""}
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