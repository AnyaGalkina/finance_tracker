import {addIncomeAC, REMOVE_INCOME} from "../Income/income-reducer";
import {addSpendAC, REMOVE_SPEND} from "../Spends/spend-reducer";
import {availableMoneyReducer, CurrentMoneyStateType } from "./availableMoney-reducer";
import {depositId, petId} from "../../app/redux/categoryId";
import PetsIcon from "@mui/icons-material/Pets";
import SavingsSharpIcon from "@mui/icons-material/SavingsSharp";


let initState: CurrentMoneyStateType  ;

beforeEach(() => {
    initState = {
        currentMoneySum: 20000
    }
})


test("current money sum will be increased when income added", () => {
    let newState = availableMoneyReducer(initState, addIncomeAC(depositId,  "Deposit",  5000,  SavingsSharpIcon))    ;

    expect(newState.currentMoneySum).toBe(25000);
    expect(initState.currentMoneySum).toBe(20000);
})

test("current money sum will be decreased when spending added", () => {
    let newState = availableMoneyReducer(initState, addSpendAC(petId,  "Pet",  10000,  PetsIcon));    ;

    expect(newState.currentMoneySum).toBe(10000);
    expect(initState.currentMoneySum).toBe(20000);

})

test("current money sum will be increased when spending removed", () => {
    let newState = availableMoneyReducer(initState, {type: REMOVE_SPEND, payload: {id: "1", sum: 5000}})    ;

    expect(newState.currentMoneySum).toBe(25000);
    expect(initState.currentMoneySum).toBe(20000);
})

test("current money sum will be decreased when income removed", () => {
    let newState = availableMoneyReducer(initState, {type: REMOVE_INCOME,  payload: {id: "1", sum: 5000}})    ;

    expect(newState.currentMoneySum).toBe(15000);
    expect(initState.currentMoneySum).toBe(20000);

})