import {changeCategoryNameAC, decreaseTotalSumAC, increaseTotalSumAC, TotalSumType,} from "../../Spends/totalSpends-reducer";
import {totalIncomeReducer} from "../totalIncome-reducer";
import {salaryId, stocksIs} from "../../../app/redux/categoryId";
import WorkSharpIcon from "@mui/icons-material/WorkSharp";
import ShowChartIcon from "@mui/icons-material/ShowChart";

let initState: TotalSumType[];

beforeEach(() => {
    initState = [
        {categoryId: salaryId, categoryName: "Salary", totalSum: 0, component: WorkSharpIcon, color: "primary"},
        {categoryId: stocksIs, categoryName: "Stocks", totalSum: 50, component: ShowChartIcon, color: "success"},
    ]
})

test("category name should be changed", () => {
    let newState = totalIncomeReducer(initState, changeCategoryNameAC(stocksIs, "Bitcoin"));

    expect(newState[1].categoryName).toBe("Bitcoin");
    expect(newState[0].categoryName).toBe("Salary");
    expect(initState[1].categoryName).toBe("Stocks");

})

test("total sum should be increased", () => {

    let newState = totalIncomeReducer(initState, increaseTotalSumAC(stocksIs, 600));

    expect(newState[1].totalSum).toBe(650);
    expect(newState[0].totalSum).toBe(0);
    expect(initState[1].totalSum).toBe(50);

})


test("total sum should be decreased", () => {

    let newState = totalIncomeReducer(initState, decreaseTotalSumAC(stocksIs, 30));

    expect(newState[1].totalSum).toBe(20);
    expect(newState[0].totalSum).toBe(0);
    expect(initState[1].totalSum).toBe(50);

})



