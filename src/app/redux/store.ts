import {combineReducers,legacy_createStore as createStore} from "redux";
import {addSpendAC, removeSpendAC, spendsReducer} from "../../features/Spends/spend-reducer";
import {changeCategoryNameAC, decreaseTotalSumAC, increaseTotalSumAC, totalSpendReducer} from "../../features/Spends/totalSpends-reducer";
import {totalIncomeReducer} from "../../features/Income/totalIncome-reducer";
import {addIncomeAC, incomeReducer, removeIncomeAC} from "../../features/Income/income-reducer";
import {availableMoneyReducer} from "../../features/AvailableMoneyTracker/availableMoney-reducer";
import {loadState, saveState} from "../../common/utiles/local-storage";
import {savingReducer, setNewGoal} from "../../features/Saving/saving-reducer";

export type ActionType = ReturnType<typeof addSpendAC>
    | ReturnType<typeof removeSpendAC>
    | ReturnType<typeof removeIncomeAC>
    | ReturnType<typeof addIncomeAC>
    | ReturnType<typeof changeCategoryNameAC>
    | ReturnType<typeof increaseTotalSumAC>
    | ReturnType<typeof decreaseTotalSumAC>
    | ReturnType<typeof setNewGoal>;



export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    spends: spendsReducer,
    totalSpends: totalSpendReducer,
    income: incomeReducer,
    totalIncome: totalIncomeReducer,
    availableMoney: availableMoneyReducer,
    saving: savingReducer
});

export const store = createStore(rootReducer);


// export const store = createStore(rootReducer, loadState());
store.subscribe(() => {
    saveState(store.getState())
})
//@ts-ignore
window.store = store;