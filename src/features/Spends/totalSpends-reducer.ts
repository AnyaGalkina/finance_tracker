import {
    clothesId,
    creditsId,
    foodId,
    giftsId,
    healthCareId,
    houseId,
    kidsId,
    otherExpanseId,
    petId,
    restaurantsId,
    sportId,
    transportId,
    travelId
} from "../../app/redux/categoryId";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import {ActionType} from "../../app/redux/store";

export type SvgComponentType = OverridableComponent<SvgIconTypeMap> & { muiName: string };
export type TotalSumType = {
    categoryId: string;
    categoryName: string;
    totalSum: number;
}


export const CHANGE_CATEGORY_NAME = "CHANGE_CATEGORY_NAME";
export const INCREASE_TOTAL_SUM = "INCREASE_TOTAL_SUM";
export const DECREASE_TOTAL_SUM = "DECREASE_TOTAL_SUM";

const initialState: TotalSumType[] = [
    {categoryId: foodId, categoryName: "Food", totalSum: 0},
    {categoryId: restaurantsId, categoryName: "Restaurants", totalSum: 0},
    {categoryId: travelId, categoryName: "Travel", totalSum: 0},
    {categoryId: transportId, categoryName: "Transport", totalSum: 0},
    {categoryId: petId, categoryName: "Pet", totalSum: 0},
    {categoryId: houseId, categoryName: "House", totalSum: 0},
    {categoryId: healthCareId, categoryName: "Health care", totalSum: 0},
    {categoryId: clothesId, categoryName: "Shopping", totalSum: 0},
    {categoryId: kidsId, categoryName: "Kids", totalSum: 0},
    {categoryId: sportId, categoryName: "Sport", totalSum: 0},
    {categoryId: giftsId, categoryName: "Gifts", totalSum: 0},
    {categoryId: creditsId, categoryName: "Credits", totalSum: 0},
    {categoryId: otherExpanseId, categoryName: "Other", totalSum: 0},
];


export const totalSpendReducer = (state: TotalSumType[] = initialState, action: ActionType): TotalSumType[] => {
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


export const changeCategoryNameAC = (categoryId: string, categoryName: string) => {
    return {
        type: CHANGE_CATEGORY_NAME,
        payload: {
            categoryId,
            categoryName
        }
    } as const
}

export const increaseTotalSumAC = (categoryId: string, totalSum: number) => {
    return {
        type: INCREASE_TOTAL_SUM,
        payload: {
            categoryId,
            totalSum
        }
    } as const
}
export const decreaseTotalSumAC = (categoryId: string, totalSum: number) => {
    return {
        type: DECREASE_TOTAL_SUM,
        payload: {
            categoryId,
            totalSum
        }
    } as const
}
