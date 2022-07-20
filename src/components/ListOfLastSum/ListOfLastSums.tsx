import React from "react";
import {RemoveSpendType, SumType} from "../../redux/spend-reducer";
import ListItem from "./ListItem/ListItem";
import {RemoveIncomeType} from "../../redux/income-reducer";


type PropsType = {
    sum: SumType[];
    removeItem: (id: string) => RemoveSpendType |  RemoveIncomeType;
}

const ListOfLastSums: React.FC<PropsType> = ({sum, removeItem}) => {

    return (
        <div>
            {sum.map(s => {

                return (
                    <ListItem
                        key={s.id}
                        categoryName={s.categoryName}
                        component={s.component}
                        sum={s.sum}
                        removeItem={removeItem}
                        id={s.id}
                        categoryId={s.categoryId}
                    />
                )
            })}
        </div>
    )
};

export default ListOfLastSums;
