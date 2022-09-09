import {combineReducers, createStore} from "redux";
import {addSpendAC, removeSpendAC, spendsReducer} from "./spend-reducer";
import {changeCategoryNameAC, decreaseTotalSumAC, increaseTotalSumAC, totalSpendReducer} from "./totalSpends-reducer";
import {totalIncomeReducer} from "./totalIncome-reducer";
import {addIncomeAC, incomeReducer, removeIncomeAC} from "./income-reducer";
import {availableMoneyReducer} from "./availableMoney-reducer";

export type ActionType = ReturnType<typeof addSpendAC>
    | ReturnType<typeof removeSpendAC>
    // | ReturnType<typeof removeIncomeAC>
    | ReturnType<typeof removeIncomeAC>
    | ReturnType<typeof addIncomeAC>
    | ReturnType<typeof changeCategoryNameAC>
    | ReturnType<typeof increaseTotalSumAC>
    | ReturnType<typeof  decreaseTotalSumAC>;



export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    spends: spendsReducer,
    totalSpends: totalSpendReducer,
    income: incomeReducer,
    totalIncome: totalIncomeReducer,
    availableMoney: availableMoneyReducer,
});

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store;