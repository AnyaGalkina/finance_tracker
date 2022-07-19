import {combineReducers, createStore} from "redux";
import {spendsReducer} from "./spend-reducer";
import {totalSpendReducer} from "./totalSpends-reducer";
import {totalIncomeReducer} from "./totalIncome-reducer";
import {incomeReducer} from "./income-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    spends: spendsReducer,
    totalSpends: totalSpendReducer,
    income: incomeReducer,
    totalIncome: totalIncomeReducer,
});

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store;