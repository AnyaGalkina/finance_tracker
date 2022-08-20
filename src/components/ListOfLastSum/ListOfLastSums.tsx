import React, {memo} from "react";
import {SumType} from "../../redux/spend-reducer";
import ListItem from "./ListItem/ListItem";


type PropsType = {
    sum: SumType[];
    removeItem: (id: string, sum: number) =>  void;
}

const ListOfLastSums = memo(({sum, removeItem }: PropsType) => {
    console.log('ListOfLastSums');

    const removeItemHandler = (id: string, sum: number) => {
        removeItem(id, sum)
    }

    return (
        <div>
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
