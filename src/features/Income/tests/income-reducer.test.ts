import {SumType} from "../../Spends/spend-reducer";
import {depositId, salaryId, stocksIs} from "../../../app/redux/categoryId";
import {addIncomeAC, incomeReducer, removeIncomeAC} from "../income-reducer";
import {changeCategoryNameAC} from "../../Spends/totalSpends-reducer";

let initState: SumType[];

beforeEach(() => {
    initState = [
        {categoryId: salaryId, id: "0", categoryName: "Salary", sum: 1000},
        {categoryId: stocksIs, id: "1", categoryName: "Stocks", sum: 10},
        {categoryId: salaryId, id: "2", categoryName: "Salary",sum: 2000},
    ];
})

test("income should be added", () => {
    let newState = incomeReducer(initState, addIncomeAC(depositId,  "Deposit",  500));

    expect(newState.length).toBe(4);
    expect(newState[3].id).toBeDefined();
    expect(newState[3].categoryId).toBe(depositId);
    expect(newState[3].categoryName).toBe("Deposit");
    expect(newState[3].sum).toBe(500);
    expect(initState.length).toBe(3);
})

test("expense should be removed", () => {
    let newState = incomeReducer(initState, removeIncomeAC("1", 100));

    expect(newState.length).toBe(2);
    expect(newState.find( el => el.id === "1")).toBeUndefined();
    expect(initState.length).toBe(3);
})

test("name of category should be changed", () => {
    let newState = incomeReducer(initState, changeCategoryNameAC( salaryId, "Deposit"));

    expect(newState.length).toBe(3);
    expect(newState[0].categoryName).toBe("Deposit");
    expect(newState[2].categoryName).toBe("Deposit");
    expect(newState[2].sum).toBe(2000);
    expect(newState[1].categoryName).toBe("Stocks");
    expect(initState[0].categoryName).toBe("Salary");
    expect(initState[2].categoryName).toBe("Salary");
})