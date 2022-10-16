import {depositId, getPresentsId, leaseId, otherIncomeId, salaryId, stocksIs} from "../../app/redux/categoryId";
import {
    CHANGE_CATEGORY_NAME,
    DECREASE_TOTAL_SUM,
    INCREASE_TOTAL_SUM,
    TotalSumType,
} from "../Spends/totalSpends-reducer";
import {ActionType} from "../../app/redux/store";


const initialState: TotalSumType[] = [
    {categoryId: salaryId, categoryName: "Salary", totalSum: 0},
    {categoryId: depositId, categoryName: "Deposit", totalSum: 0},
    {categoryId: stocksIs, categoryName: "Stocks", totalSum: 0, },
    {categoryId: leaseId, categoryName: "Lease", totalSum: 0},
    {categoryId: getPresentsId, categoryName: "Gifts", totalSum: 0},
    {categoryId: otherIncomeId, categoryName: "Other", totalSum: 0},
];


export const totalIncomeReducer = (state: TotalSumType[] = initialState, action: ActionType): TotalSumType[] => {
    switch (action.type) {
        case  CHANGE_CATEGORY_NAME:
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {...s, categoryName: action.payload.categoryName} : s
            );
        case INCREASE_TOTAL_SUM:
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {
                    ...s,
                    totalSum: (s.totalSum + action.payload.totalSum)
                } : s
            );
        case DECREASE_TOTAL_SUM:
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {
                    ...s,
                    totalSum: (s.totalSum - action.payload.totalSum)
                } : s
            );
        default:
            return state;
    }
}
