import React, {ChangeEvent, useState} from "react";
import IconList from "../IconList/IconList";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import styles from "./Input.module.css";
import {useDispatch} from "react-redux";
import {AddIncomeType} from "../../redux/income-reducer";
import {AddSpendType} from "../../redux/spend-reducer";

type PropsType = {
    addItem: (id: string, category: string, value: number, component: SvgComponentType) => AddIncomeType | AddSpendType;
    totalSum: TotalSumType[];
    title: string;
}

const Input: React.FC<PropsType> = ({addItem, title, totalSum}) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const addSumHandler = (categoryId: string, categoryName: string, component: SvgComponentType) => {
        if (+value > 0) {
            dispatch(addItem(categoryId, categoryName, +value, component))
            // dispatch(addSpendAC(id, category, +value, component))
            setValue("");
            setError(false);
        } else {
            setError(true);
        }
    }



    return (
        <div>
            <h2>{title}</h2>
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
};

export default Input;