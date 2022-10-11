import {v1} from "uuid";
import {ActionType} from "../../app/redux/store";

export const SET_NEW_GOAL = "SET_NEW_GOAL";
export const UPDATE_GOAL_CURRENT_SUM = "UPDATE_GOAL_CURRENT_SUM";
export const DELETE_GOAL = "DELETE_GOAL";

export const initialState = [];

export type GoalType = {
    goalId: string,
    goalTitle: string,
    goalObjSum: number,
    goalCurrentSum: number,
    isAchieved: false
}

export const savingReducer = (state: Array<GoalType> = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_NEW_GOAL:
            let newGoal: GoalType = {
                goalId: v1(),
                goalTitle: action.payload.goalTitle,
                goalObjSum: action.payload.goalObjSum,
                goalCurrentSum: 0,
                isAchieved: false
            }
            return [...state, newGoal];
        case UPDATE_GOAL_CURRENT_SUM:
            return state.map(g => g.goalId === action.payload.goalId
                ? {...g, goalCurrentSum: (g.goalCurrentSum + action.payload.sum), isAchieved: action.payload.isAchieved} : g);
        case DELETE_GOAL:
            debugger
            return state.filter(g => g.goalId !== action.payload.goalId);
        default:
            return state;
    }
}


export const setNewGoal = (goalTitle: string, goalObjSum: number) => {
    return {
        type: SET_NEW_GOAL,
        payload: {goalTitle, goalObjSum}
    } as const
}

export const updateGoalCurrentSum = (goalId: string, sum: number, isAchieved: boolean) => {
    return {
        type: UPDATE_GOAL_CURRENT_SUM,
        payload: {goalId, sum, isAchieved}
    } as const
}

export const deleteGoal = (goalId: string) => {
    debugger

    return {
        type: DELETE_GOAL,
        payload: {goalId}
    } as const
}