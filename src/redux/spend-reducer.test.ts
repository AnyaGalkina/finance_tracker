import {addSpendAC, removeSpendAC, spendsReducer, SumType} from "./spend-reducer";
import {foodId, petId, travelId} from "./categoryId";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlightIcon from "@mui/icons-material/Flight";
import PetsIcon from "@mui/icons-material/Pets";
import {changeCategoryNameAC} from "./totalSpends-reducer";

let initState: SumType[];

beforeEach(() => {
    initState = [
        {categoryId: foodId, id: "0", categoryName: "Food", sum: 100, component: FastfoodIcon},
        {categoryId: travelId, id: "1", categoryName: "Travel", sum: 10, component: FlightIcon},
        {categoryId: foodId, id: "2", categoryName: "Food", sum: 200, component: FastfoodIcon},
    ];
})

test("expense should be added", () => {
    let newState = spendsReducer(initState, addSpendAC(petId,  "Pet",  200,  PetsIcon));

    expect(newState.length).toBe(4);
    expect(newState[3].id).toBeDefined();
    expect(newState[3].categoryId).toBe(petId);
    expect(newState[3].categoryName).toBe("Pet");
    expect(newState[3].sum).toBe(200);
    expect(newState[3].component).toBe(PetsIcon);
    expect(initState.length).toBe(3);
})

test("expense should be removed", () => {
    let newState = spendsReducer(initState, removeSpendAC("1"));

    expect(newState.length).toBe(2);
    expect(newState.find( el => el.id === "1")).toBeUndefined();
    expect(initState.length).toBe(3);

})

test("name of category should be changed", () => {
    let newState = spendsReducer(initState, changeCategoryNameAC( foodId, "Cafe"));

    expect(newState.length).toBe(3);
    expect(newState[0].categoryName).toBe("Cafe");
    expect(newState[2].categoryName).toBe("Cafe");
    expect(newState[2].sum).toBe(200);
    expect(newState[1].categoryName).toBe("Travel");
    expect(initState[0].categoryName).toBe("Food");
    expect(initState[2].categoryName).toBe("Food");
})