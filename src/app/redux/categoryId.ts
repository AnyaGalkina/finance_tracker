import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PetsIcon from "@mui/icons-material/Pets";
import HouseIcon from "@mui/icons-material/House";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CelebrationSharpIcon from "@mui/icons-material/CelebrationSharp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import {SvgComponentType} from "../../features/Spends/totalSpends-reducer";
import WorkSharpIcon from "@mui/icons-material/WorkSharp";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SavingsSharpIcon from "@mui/icons-material/SavingsSharp";
import RedeemIcon from "@mui/icons-material/Redeem";

//Expenses
export const transportId = "0";
export const foodId = "1";
export const travelId = "2";
export const petId = "3";
export const houseId = "4";
export const healthCareId = "5";
export const kidsId = "6";
export const clothesId = "7";
export const sportId = "8";
export const giftsId = "9";
export const creditsId = "10";
export const otherExpanseId = "11";
export const restaurantsId = "12";

// Income
export const salaryId = "13";
export const depositId = "14";
export const stocksIs = "15";
export const leaseId = "16";
export const getPresentsId = "17";
export const otherIncomeId = "18";


export const categoriesImg: CategoriesImgType = {
    [foodId]: {component: FastfoodIcon, color: "success"},
    [restaurantsId]: {component: RestaurantIcon, color: "error"},
    [travelId]: {component: FlightIcon, color: "info"},
    [transportId]: {component: DirectionsCarIcon, color: "warning"},
    [petId]: {component: PetsIcon, color: "primary"},
    [houseId]: {component: HouseIcon, color: "secondary"},
    [healthCareId]: {component: VaccinesIcon, color: "error"},
    [clothesId]: {component: CheckroomIcon, color: "success"},
    [kidsId]: {component: ChildFriendlyIcon, color: "warning"},
    [sportId]: {component: FitnessCenterIcon, color: "info"},
    [giftsId]: {component: CelebrationSharpIcon, color: "error"},
    [creditsId]: {component: AccountBalanceIcon, color: "primary"},
    [otherExpanseId]: {component: HelpSharpIcon, color: "secondary"},
    [salaryId]: {component: WorkSharpIcon, color: "primary"},
    [depositId]: {component: SavingsSharpIcon, color: "warning"},
    [stocksIs]: {component: ShowChartIcon, color: "success"},
    [leaseId]: {component: HouseIcon, color: "error"},
    [getPresentsId]: {component: RedeemIcon, color: "secondary"},
    [otherIncomeId]: {component: HelpSharpIcon, color: "info"},
}

type CategoriesImgType = {
    [key: string]: {
        component: SvgComponentType;
        color: "primary" | "secondary" | "success" | "error" | "info" | "warning"
    }
}



