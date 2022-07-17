import React from "react";
import Input from "../Input/Input";
import ListOfLastSums from "./ListOfLastSpends";
import {SpendStateType} from "../../reducers/spend-reducer";
import {SvgComponentType} from "../../reducers/totalSpends-reducer";

type PropsType = {
    totalSpendsState: any
    spends: SpendStateType[];
    changeCategoryName: (id: string, category: string) => void;
    addSpend: (id: string,  category: string, sum: number,  component: SvgComponentType) => void;
    removeSpend: (id: string) => void;
}

export const Spends: React.FC<PropsType> = ({spends, totalSpendsState, addSpend, changeCategoryName, removeSpend}) => {


    return (
        <div>
            <Input
                changeCategoryName={changeCategoryName}
                addSpend={addSpend} totalSpendsState={totalSpendsState}
            />

            <ListOfLastSums
                spends={spends}
                removeSpend={removeSpend}
            />
        </div>
    );
};


