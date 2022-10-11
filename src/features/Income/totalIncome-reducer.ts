import {depositId, getPresentsId, leaseId, otherIncomeId, salaryId, stocksIs} from "../../app/redux/categoryId";
import HouseIcon from "@mui/icons-material/House";
import WorkSharpIcon from "@mui/icons-material/WorkSharp";
import SavingsSharpIcon from "@mui/icons-material/SavingsSharp";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import {CHANGE_CATEGORY_NAME, DECREASE_TOTAL_SUM, INCREASE_TOTAL_SUM, TotalSumType,} from "../Spends/totalSpends-reducer";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import {ActionType} from "../../app/redux/store";


const initialState: TotalSumType[] = [
    {categoryId: salaryId, categoryName: "Salary", totalSum: 0, component: WorkSharpIcon, color: "primary"},
    {categoryId: depositId, categoryName: "Deposit", totalSum: 0, component: SavingsSharpIcon,
        //@ts-ignore
        color: "warning"},
    {categoryId: stocksIs, categoryName: "Stocks", totalSum: 0, component: ShowChartIcon, color: "success"},
    {categoryId: leaseId, categoryName: "Lease", totalSum: 0, component: HouseIcon, color: "error"},
    {categoryId: getPresentsId, categoryName: "Gifts", totalSum: 0, component: RedeemIcon, color: "secondary"},
    {categoryId: otherIncomeId, categoryName: "Other", totalSum: 0, component: HelpSharpIcon,
        //@ts-ignore
        color: "info"},
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
