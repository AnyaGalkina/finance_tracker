import {
    changeCategoryNameAC, decreaseTotalSumAC, increaseTotalSumAC,
    totalSpendReducer,
    TotalSumType,
} from "../totalSpends-reducer";
import {foodId, petId, travelId} from "../../../app/redux/categoryId";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlightIcon from "@mui/icons-material/Flight";
import PetsIcon from "@mui/icons-material/Pets";

let initState: TotalSumType[];

beforeEach(() => {
    initState = [
        {categoryId: foodId, categoryName: "Food", totalSum: 0, component: FastfoodIcon, color: "primary"},
        {categoryId: petId, categoryName: "Pet", totalSum: 100, component: PetsIcon, color: "primary"},
        {categoryId: travelId, categoryName: "Travel", totalSum: 0, component: FlightIcon, color: "secondary"},
    ]
})

test("category name should be changed", () => {

    let newState = totalSpendReducer(initState, changeCategoryNameAC(travelId, "Trip"));

    expect(newState[2].categoryName).toBe("Trip");
    expect(newState[0].categoryName).toBe("Food");
    expect(initState[2].categoryName).toBe("Travel");

})

test("total sum should be increased", () => {

    let newState = totalSpendReducer(initState, increaseTotalSumAC(petId, 600));

    expect(newState[1].totalSum).toBe(700);
    expect(newState[0].totalSum).toBe(0);
    expect(initState[1].totalSum).toBe(100);

})

test("total sum should be decreased", () => {

    let newState = totalSpendReducer(initState, decreaseTotalSumAC(petId, 50));

    expect(newState[1].totalSum).toBe(50);
    expect(newState[0].totalSum).toBe(0);
    expect(initState[1].totalSum).toBe(100);

})
