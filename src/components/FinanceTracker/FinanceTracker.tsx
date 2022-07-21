import React from "react";
import Input from "../Input/Input";
import {AddSpendType, RemoveSpendType, SumType} from "../../redux/spend-reducer";
import ListOfLastSums from "../ListOfLastSum/ListOfLastSums";
import {SvgComponentType, TotalSumType} from "../../redux/totalSpends-reducer";
import {AddIncomeType, RemoveIncomeType} from "../../redux/income-reducer";

type PropsType = {
    addItem: (id: string, category: string, value: number, component: SvgComponentType) => AddIncomeType | AddSpendType;
    totalSum: TotalSumType[];
    title: string;
    sum: SumType[];
    removeItem: (id: string, currentMoneySum: number) => RemoveSpendType |  RemoveIncomeType;
}

export const FinanceTracker: React.FC<PropsType> = ({title, sum, removeItem, addItem, totalSum}) => {
    return (
        <div>
            <h2>{title}</h2>
            <Input
                totalSum={totalSum}
                addItem={addItem}
            />
            <ListOfLastSums sum={sum} removeItem={removeItem}/>
        </div>
    );
};

export default FinanceTracker;