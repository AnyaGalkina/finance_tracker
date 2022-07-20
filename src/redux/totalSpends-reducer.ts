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

export type SvgComponentType = OverridableComponent<SvgIconTypeMap> & { muiName: string };
export type TotalSumType = {
    categoryId: string;
    categoryName: string;
    totalSum: number;
    component: SvgComponentType;
    color: "primary" | "secondary" | "success" | "error";
}
export type ChangeCategoryNameType = ReturnType<typeof changeCategoryNameAC>;
export type UpdateTotalSumType = ReturnType<typeof updateTotalSumAC>;

type ActionType = ChangeCategoryNameType | UpdateTotalSumType;

export const CHANGE_CATEGORY_NAME = "CHANGE_CATEGORY_NAME";
export const UPDATE_TOTAL_SUM = "UPDATE_TOTAL_SUM ";

const initialState: TotalSumType[] = [
    {categoryId: foodId, categoryName: "Food", totalSum: 0, component: FastfoodIcon, color: "primary"},
    {categoryId: restaurantsId, categoryName: "Restaurants", totalSum: 0, component: RestaurantIcon, color:  "error"},
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
        case UPDATE_TOTAL_SUM:
            return state.map(s =>
                s.categoryId === action.payload.categoryId ? {...s, totalSum: (s.totalSum + action.payload.totalSum)} : s
            )
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

export const updateTotalSumAC = (categoryId: string, totalSum: number) => {
    return {
        type: UPDATE_TOTAL_SUM,
        payload: {
            categoryId,
            totalSum
        }
    } as const
}

