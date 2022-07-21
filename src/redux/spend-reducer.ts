import {CHANGE_CATEGORY_NAME, ChangeCategoryNameType, SvgComponentType} from "./totalSpends-reducer";
import {v1} from "uuid";

export const ADD_SPEND = "ADD_SPEND";
export const REMOVE_SPEND = "REMOVE_SPEND";

export type SumType = {
    categoryId: string;
    id: string;
    categoryName: string;
    sum: number;
    component: SvgComponentType

}

export type AddSpendType = ReturnType<typeof addSpendAC>;
export type RemoveSpendType = ReturnType<typeof removeSpendAC>;


type ActionType = AddSpendType | RemoveSpendType | ChangeCategoryNameType;

export const initialState: SumType[] = [];


export const spendsReducer = (state: SumType[] = initialState, action: ActionType): SumType[] => {
    switch (action.type) {
        case ADD_SPEND:
            let newSpend = {
                categoryId: action.payload.categoryId,
                id: action.payload.id,
                categoryName: action.payload.categoryName,
                sum: action.payload.sum,
                component: action.payload.component
            }
            return [...state, newSpend];
        case CHANGE_CATEGORY_NAME:
            debugger
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {...s, categoryName: action.payload.categoryName} : s
            );
        case REMOVE_SPEND:
            return state.filter(s => s.id !== action.payload.id)
        default:
            return state;
    }
}

export const addSpendAC = (categoryId: string, categoryName: string, sum: number, component: SvgComponentType) => {
    return {
        type: ADD_SPEND,
        payload: {
            categoryId,
            id: v1(),
            categoryName,
            sum,
            component,
        }
    } as const
}


export const removeSpendAC = (id: string, sum: number) => {
    return {
        type: REMOVE_SPEND,
        payload: {
            id,
            sum
        }
    } as const
}
