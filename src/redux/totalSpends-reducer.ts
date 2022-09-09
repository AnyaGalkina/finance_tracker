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
} from "./categoryId";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlightIcon from "@mui/icons-material/Flight";
import PetsIcon from "@mui/icons-material/Pets";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HouseIcon from "@mui/icons-material/House";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import CelebrationSharpIcon from "@mui/icons-material/CelebrationSharp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import {ActionType} from "./store";

export type SvgComponentType = OverridableComponent<SvgIconTypeMap> & { muiName: string };
export type TotalSumType = {
    categoryId: string;
    categoryName: string;
    totalSum: number;
    component: SvgComponentType;
    color: "primary" | "secondary" | "success" | "error";
}


export const CHANGE_CATEGORY_NAME = "CHANGE_CATEGORY_NAME";
export const INCREASE_TOTAL_SUM = "INCREASE_TOTAL_SUM";
export const DECREASE_TOTAL_SUM= "DECREASE_TOTAL_SUM";


const initialState: TotalSumType[] = [
    {categoryId: foodId, categoryName: "Food", totalSum: 2, component: FastfoodIcon, color: "primary"},
    {categoryId: restaurantsId, categoryName: "Restaurants", totalSum: 6, component: RestaurantIcon, color:  "error"},
    {categoryId: travelId, categoryName: "Travel", totalSum: 0, component: FlightIcon, color: "secondary"},
    {categoryId: transportId, categoryName: "Transport", totalSum: 0, component: DirectionsCarIcon, color: "success"},
    {categoryId: petId, categoryName: "Pet", totalSum: 0, component: PetsIcon, color: "primary"},
    {categoryId: houseId, categoryName: "House", totalSum: 0, component: HouseIcon, color: "secondary"},
    {categoryId: healthCareId, categoryName: "Health care", totalSum: 0, component: VaccinesIcon, color: "error"},
    {categoryId: clothesId, categoryName: "Shopping", totalSum: 0, component: CheckroomIcon, color: "secondary"},
    {categoryId: kidsId, categoryName: "Kids", totalSum: 0, component: ChildFriendlyIcon, color: "primary"},
    {categoryId: sportId, categoryName: "Sport", totalSum: 0, component: FitnessCenterIcon, color: "secondary"},
    {categoryId: giftsId, categoryName: "Gifts", totalSum: 0, component: CelebrationSharpIcon, color: "error"},
    {categoryId: creditsId, categoryName: "Credits", totalSum: 0, component: AccountBalanceIcon, color: "primary"},
    {categoryId: otherExpanseId, categoryName: "Other", totalSum: 0, component: HelpSharpIcon, color: "primary"},
];


export const totalSpendReducer = (state: TotalSumType[] = initialState, action: ActionType): TotalSumType[] => {
    switch (action.type) {
        case  CHANGE_CATEGORY_NAME:
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {...s, categoryName: action.payload.categoryName} : s
            );
        case INCREASE_TOTAL_SUM:
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {...s, totalSum: (s.totalSum + action.payload.totalSum)} : s
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


export const changeCategoryNameAC = (categoryId: string,categoryName: string) => {
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

