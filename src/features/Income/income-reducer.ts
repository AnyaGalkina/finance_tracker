import {CHANGE_CATEGORY_NAME} from "../Spends/totalSpends-reducer";
import {SumType} from "../Spends/spend-reducer";
import {v1} from "uuid";
import {ActionType} from "../../app/redux/store";

export const ADD_INCOME = "ADD_INCOME";
export const REMOVE_INCOME = "REMOVE_INCOME";

export const initialState: SumType[] = [];


export const incomeReducer = (state: SumType[] = initialState, action: ActionType): SumType[] => {
    switch (action.type) {
        case ADD_INCOME:
            let newIncome = {
                categoryId: action.payload.categoryId,
                id: action.payload.id,
                categoryName: action.payload.categoryName,
                sum: action.payload.sum,
            }
            debugger
            return [...state, newIncome];
        case CHANGE_CATEGORY_NAME:
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {...s, categoryName: action.payload.categoryName} : s
            );
        case REMOVE_INCOME:
            return state.filter(s => s.id !== action.payload.id)
        default:
            return state;
    }
}

export const addIncomeAC = (categoryId: string, categoryName: string, sum: number,) => {
    debugger
    return {
        type: ADD_INCOME,
        payload: {
            categoryId,
            id: v1(),
            categoryName,
            sum,
        }
    } as const
}


export const removeIncomeAC = (id: string, sum: number) => {
    return {
        type: REMOVE_INCOME,
        payload: {
            id,
            sum
        }
    } as const
}

