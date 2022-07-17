import React, {useReducer} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Spends} from "./components/Spends/Spends";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import {addSpendAC, removeSpendAC, changeCategoryNameInSpendsListAC, spendsReducer, spendsState} from "./reducers/spend-reducer";
import {
    totalSpendReducer,
    // totalSpendsState,
    changeCategoryNameAC, SvgComponentType
} from "./reducers/totalSpends-reducer";
import {babyId, clothesId, foodId, healthCareId, houseId, petId, transportId, travelId} from "./reducers/categoryId";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PetsIcon from "@mui/icons-material/Pets";
import HouseIcon from "@mui/icons-material/House";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";


function App() {

    const [spends, dispatchSpends] = useReducer(spendsReducer, spendsState);
    const [totalSpends, dispatchTotalSpends] = useReducer(totalSpendReducer,  [
        {id: foodId, categoryName: "Food", totalSum: 0, component: FastfoodIcon, color: "primary"},
        {id: travelId, categoryName: "Travel", totalSum: 0, component: FlightIcon, color: "secondary"},
        {id: transportId, categoryName: "Transport", totalSum: 0, component: DirectionsCarIcon, color: "success"},
        {id: petId, categoryName: "Pet", totalSum: 0, component: PetsIcon, color: "primary"},
        {id: houseId, categoryName: "House", totalSum: 0, component: HouseIcon, color: "secondary"},
        {id: healthCareId, categoryName: "Health care", totalSum: 0, component: VaccinesIcon, color: "error"},
        {id: clothesId, categoryName: "Shopping", totalSum: 0, component: CheckroomIcon, color: "secondary"},
        {id: babyId, categoryName: "Baby", totalSum: 0, component: ChildFriendlyIcon, color: "primary"},
    ]);

    const addSpend = (id: string, category: string, spend: number,  component: SvgComponentType  ) => {
        dispatchSpends(addSpendAC(id, category, spend,  component))
    }

    const changeCategoryName = (id: string, category: string) => {
        debugger
        dispatchTotalSpends(changeCategoryNameAC(id, category));
        dispatchSpends(changeCategoryNameInSpendsListAC(id,category));
    }

    const removeSpend = (id: string) => {
        dispatchSpends(removeSpendAC(id))
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Main/>}></Route>
                <Route path={"/spends"}
                       element={
                           <Spends
                               totalSpendsState={totalSpends}
                               changeCategoryName={changeCategoryName}
                               addSpend={addSpend}
                               removeSpend={removeSpend}
                               spends={spends}
                           />}>
                </Route>
                {/*<Route path={"/earnings"} element={<Earnings/>}></Route>*/}
            </Routes>
        </div>
    );
}

export default App;


