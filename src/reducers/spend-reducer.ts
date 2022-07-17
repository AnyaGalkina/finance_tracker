import {CHANGE_CATEGORY_NAME, SvgComponentType} from "./totalSpends-reducer";

const ADD_SPEND = "ADD_SPEND";
const REMOVE_SPEND = "REMOVE_SPEND";

export type SpendStateType = {
    id: string;
    category: string;
    sum: number;
    component: SvgComponentType
}

type AddSpendType = ReturnType<typeof addSpendAC>;
type RemoveSpendType = ReturnType<typeof removeSpendAC>;
type ChangeCategoryNameInSpendsListType = ReturnType<typeof changeCategoryNameInSpendsListAC>;


type ActionType = AddSpendType | RemoveSpendType | ChangeCategoryNameInSpendsListType ;

export const spendsState = [];


export const spendsReducer = (state: SpendStateType[], action: ActionType): SpendStateType[] => {
    switch (action.type) {
        case ADD_SPEND:
        let newSpend={id: action.payload.id, category: action.payload.category, sum: action.payload.spend, component: action.payload.component}
            return [...state, newSpend];
        case CHANGE_CATEGORY_NAME:
            debugger
            return state.map(s =>
                s.id === action.payload.id ? {...s, category: action.payload.category} : s
            );
        case REMOVE_SPEND:
            return state.filter(s => s.id !== action.payload.id)
        default:
            return state;
    }
}

export const addSpendAC = (id: string, category: string, spend: number, component: SvgComponentType  ) => {
    return {
        type: ADD_SPEND,
        payload: {
            id,
            category,
            spend,
            component
        }
    }as const
}


export const removeSpendAC = (id: string) => {
    return {
        type: REMOVE_SPEND,
        payload: {
            id
        }
    } as const
}

export const changeCategoryNameInSpendsListAC = (id: string, category: string) => {
    return {
        type: CHANGE_CATEGORY_NAME,
        payload: {
            id,
            category
        }
    }as const
}
