import {foodId, houseId, petId, travelId, healthCareId, babyId, clothesId} from "./categoryId";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlightIcon from "@mui/icons-material/Flight";
import PetsIcon from "@mui/icons-material/Pets";
import HouseIcon from "@mui/icons-material/House";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";

export type SvgComponentType = OverridableComponent<SvgIconTypeMap> & { muiName: string };
export type TotalSpendsStateType = {
    id: string;
    categoryName: string;
    totalSum: number;
    component: SvgComponentType;
    color: "primary" | "secondary" | "success" | "error";
}
type ChangeCategoryNameType = ReturnType<typeof changeCategoryNameAC>;
type UpdateTotalSumType = ReturnType<typeof updateTotalSumAC>;

type ActionType =  ChangeCategoryNameType | UpdateTotalSumType;


export const CHANGE_CATEGORY_NAME = "CHANGE_CATEGORY_NAME";
export const UPDATE_TOTAL_SUM = "UPDATE_TOTAL_SUM ";

// export const totalSpendsState = [
//     {id: foodId, categoryName: "Food", totalSum: 0, component: FastfoodIcon, color: "primary"},
//     {id: travelId, categoryName: "Travel", totalSum: 0, component: FlightIcon, color: "secondary"},
//     {id: travelId, categoryName: "Transport", totalSum: 0, component: DirectionsCarIcon, color: "success"},
//     {id: petId, categoryName: "Pet", totalSum: 0, component: PetsIcon, color: "primary"},
//     {id: houseId, categoryName: "House", totalSum: 0, component: HouseIcon, color: "secondary"},
//     {id: healthCareId, categoryName: "Health care", totalSum: 0, component: VaccinesIcon, color: "error"},
//     {id: clothesId, categoryName: "Shopping", totalSum: 0, component: CheckroomIcon, color: "secondary"},
//     {id: babyId, categoryName: "Baby", totalSum: 0, component: ChildFriendlyIcon, color: "primary"},
// ];


export const totalSpendReducer = (state: TotalSpendsStateType[], action: ActionType): TotalSpendsStateType[] => {
    switch (action.type) {
        case  CHANGE_CATEGORY_NAME:
            debugger
            return state.map(s =>
                s.id === action.payload.id ? {...s, categoryName: action.payload.category} : s
            );
        case UPDATE_TOTAL_SUM:
            return state.map(s =>
                s.id === action.payload.id ? {...s, totalSum: action.payload.totalSum} : s
            )
        default:
            return state;
    }
}



export const changeCategoryNameAC = (id: string, category: string) => {
    return {
        type: CHANGE_CATEGORY_NAME,
        payload: {
            id,
            category
        }
    }as const
}

export const updateTotalSumAC = (id: string, totalSum: number) => {
    return {
        type: UPDATE_TOTAL_SUM,
        payload: {
            id,
            totalSum
        }
    }as const
}

