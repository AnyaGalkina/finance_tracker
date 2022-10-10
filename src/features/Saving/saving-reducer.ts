import {v1} from "uuid";

const SET_NEW_GOAL = "SET_NEW_GOAL";
const UPDATE_GOAL_CURRENT_SUM = "UPDATE_GOAL_CURRENT_SUM";

export const initialState = [];

export type GoalType = {
    goalId: string,
    goalTitle: string,
    goalObjSum: number,
    goalCurrentSum: number,
    isAchieved: false
}

export type InitialStateType = Array<GoalType>


export const savingReducer = (state: InitialStateType = initialState, action: any) => {
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
                ? {...g, goalCurrentSum:action.payload.goalCurrentSum, isAchieved: action.payload.isAchieved} : g);
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

export const updateGoalCurrentSum = (goalId: string, goalCurrentSum: number, isAchieved: boolean) => {
    return {
     type: UPDATE_GOAL_CURRENT_SUM,
     payload: {goalId, goalCurrentSum, isAchieved}
    }as const
}