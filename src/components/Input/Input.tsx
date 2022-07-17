import React, {ChangeEvent, useState} from "react";
import IconList from "./IconList/IconList";
import {SvgComponentType, TotalSpendsStateType} from "../../reducers/totalSpends-reducer";
import styles from "./Input.module.css";

type PropsType = {
    addSpend: (id: string,  category: string, sum: number, component: SvgComponentType) => void;
    changeCategoryName: (id: string, category: string) => void;
    totalSpendsState: TotalSpendsStateType[];
}

const Input: React.FC<PropsType> = ({addSpend, changeCategoryName, totalSpendsState}) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const addSpendHandler = (id: string, category: string, component: SvgComponentType) => {
        if (+value > 0) {
            addSpend(id, category, +value, component);
            setValue("");
            setError(false);
        } else {
            setError(true);
        }
    }



    return (
        <div>
            <h2>Add spends</h2>
            <input
                className={styles.input}
                value={value}
                type={"number"}
                min={0}
                onChange={onChangeHandler}
            />
            {error ? <div style={{color: "red"}}>Add sum and choose category</div> : ""}
            <div className={styles.container}>
                <IconList changeCategoryName={changeCategoryName} totalSpendsState={totalSpendsState}
                          addSpend={addSpendHandler}/>
            </div>
        </div>
    );
};

export default Input;