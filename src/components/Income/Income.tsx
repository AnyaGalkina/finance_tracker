import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {addIncomeAC, removeIncomeAC} from "../../redux/income-reducer";
import ListOfLastSums from "../ListOfLastSum/ListOfLastSums";
import Input from "../Input/Input";
import {TotalSumType} from "../../redux/totalSpends-reducer";
import {SumType} from "../../redux/spend-reducer";

const Income: React.FC = () => {

    const income = useSelector<AppRootStateType, SumType[]>(state => state.income);
    const totalIncome = useSelector<AppRootStateType, TotalSumType[]>(state => state.totalIncome);

    return (
        <div>
            <Input
                title={"Add income"}
                totalSum={totalIncome}
                addItem={addIncomeAC}
            />
            <ListOfLastSums sum={income} removeItem={removeIncomeAC}/>
        </div>
    );
};

export default Income;