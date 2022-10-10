import React, {memo, useCallback} from "react";
import {SumType} from "../../../features/Spends/spend-reducer";
import ListItem from "./ListItem/ListItem";


type PropsType = {
    sum: SumType[];
    removeItem: (categoryId: string, id: string, sum: number) =>  void;
    itemName:string
}

const ListOfLastSums = memo(({sum, removeItem, itemName }: PropsType) => {
    console.log('ListOfLastSums');

    const removeItemHandler = useCallback((categoryId: string, id: string, sum: number) => {
        removeItem(categoryId, id, sum)
    },[])

    return (
        <div>
            <h3>Last {itemName}</h3>
            {sum.map(s => {

                return (
                    <ListItem
                        key={s.id}
                        categoryName={s.categoryName}
                        component={s.component}
                        sum={s.sum}
                        removeItem={removeItemHandler}
                        id={s.id}
                        categoryId={s.categoryId}
                    />
                )
            })}
        </div>
    )
});

export default ListOfLastSums;
