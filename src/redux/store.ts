import {combineReducers, createStore} from "redux";
import {spendsReducer} from "./spend-reducer";
import {totalSpendReducer} from "./totalSpends-reducer";
import {totalIncomeReducer} from "./totalIncome-reducer";
import {incomeReducer} from "./income-reducer";
import {availableMoneyReducer} from "./availableMoney-reducer";

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