import React from "react";
import Input from "../Input/Input";
import ListOfLastSums from "../ListOfLastSum/ListOfLastSums";
import {addSpendAC, removeSpendAC, SumType} from "../../redux/spend-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {TotalSumType} from "../../redux/totalSpends-reducer";

export const Spends: React.FC = () => {
    const spends = useSelector<AppRootStateType, SumType[]>(state => state.spends);
    const totalSpends = useSelector<AppRootStateType, TotalSumType[]>(state => state.totalSpends);

    return (
        <div>

            <Input
                title={"Add spends"}
                totalSum={totalSpends}
                addItem={addSpendAC}
            />
            <ListOfLastSums sum={spends} removeItem={removeSpendAC}/>
        </div>
    );
};


