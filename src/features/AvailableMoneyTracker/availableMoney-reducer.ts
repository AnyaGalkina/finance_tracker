import {ActionType} from "../../app/redux/store";
import {ADD_INCOME, REMOVE_INCOME} from "../Income/income-reducer";
import {ADD_SPEND, REMOVE_SPEND} from "../Spends/spend-reducer";
import {UPDATE_GOAL_CURRENT_SUM} from "../Saving/saving-reducer";

export type CurrentMoneyStateType = {
    currentMoneySum: number
}

let initState = {
    currentMoneySum: 0
};

export const availableMoneyReducer = (state: CurrentMoneyStateType = initState, action: ActionType): CurrentMoneyStateType => {
    switch (action.type) {
        case ADD_INCOME:
        case REMOVE_SPEND:
            return {...state, currentMoneySum: (state.currentMoneySum + action.payload.sum)};
        case REMOVE_INCOME:
        case UPDATE_GOAL_CURRENT_SUM:
        case ADD_SPEND:
            return {...state, currentMoneySum: (state.currentMoneySum - action.payload.sum)};
        default:
            return state;
    }
}