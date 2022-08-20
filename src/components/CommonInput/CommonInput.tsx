import React, {ChangeEvent, memo, useCallback, useState} from "react";
import IconList from "./IconList/IconList";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import styles from "./CommonInput.module.css";

type PropsType = {
    addItem: (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => void;
    totalSum: TotalSumType[];
}

const CommonInput = memo(({addItem,totalSum}: PropsType) => {
    console.log("CommonInput")

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const addSumHandler = useCallback((categoryId: string, categoryName: string, component: SvgComponentType) => {
        if (+value > 0) {
            addItem(categoryId, categoryName, +value, component)
            setValue("");
            setError(false);
        } else {
            setError(true);
        }
    }, [value, error, addItem])



    return (
        <div>
            <input
                className={styles.input}
                value={value}
                type={"number"}
                min={0}
                onChange={onChangeHandler}
            />
            {error ? <div style={{color: "red"}}>Add sum and choose category</div> : ""}
            <div className={styles.container}>
                <IconList
                    totalSum={totalSum}
                    addSum={addSumHandler}
                />
            </div>
        </div>
    );
});

export default CommonInput;