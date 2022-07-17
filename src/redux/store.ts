import {combineReducers, createStore} from "redux";
import {spendsReducer} from "./spend-reducer";
import {totalSpendReducer} from "./totalSpends-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    spends: spendsReducer,
    totalSpends: totalSpendReducer
});

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store;