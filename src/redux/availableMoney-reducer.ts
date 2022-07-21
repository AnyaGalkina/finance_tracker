import {ADD_INCOME, AddIncomeType, REMOVE_INCOME, RemoveIncomeType} from "./income-reducer";
import {ADD_SPEND, AddSpendType, REMOVE_SPEND, RemoveSpendType} from "./spend-reducer";


export type CurrentMoneyStateType = {
    currentMoneySum: number
}
type ActionType = RemoveIncomeType | RemoveSpendType | AddSpendType | AddIncomeType;

let initState = {currentMoneySum: 0};

export const availableMoneyReducer = (state: CurrentMoneyStateType  = initState, action: ActionType): CurrentMoneyStateType  => {
    debugger
    switch (action.type) {
        case ADD_INCOME:
            return {...state, currentMoneySum: (state.currentMoneySum + action.payload.sum)};
        case REMOVE_INCOME:
            return {...state, currentMoneySum: (state.currentMoneySum - action.payload.sum)};
        case ADD_SPEND:
            return {...state, currentMoneySum: (state.currentMoneySum - action.payload.sum)};
        case REMOVE_SPEND:
            return {...state, currentMoneySum: (state.currentMoneySum + action.payload.sum)};
        default:
            return state;
    }
}