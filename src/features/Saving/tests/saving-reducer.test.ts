import {deleteGoal, GoalType, savingReducer} from "../saving-reducer";


let initialState: Array<GoalType>;
beforeEach(() => {
    initialState = [{goalId:"1", goalTitle:"car", goalObjSum: 5000, goalCurrentSum:2000, isAchieved:false}];
});

test("gaol should be deleted", () => {
    let newState = savingReducer(initialState, deleteGoal("1"));
    expect(newState.length).toBe(0);
} )