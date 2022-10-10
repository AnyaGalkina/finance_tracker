import React from "react";
import "./App.css";
import Header from "../common/components/Header/Header";
import {Spends} from "../features/Spends/Spends";
import Main from "../features/Main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import Income from "../features/Income/Income";
import AvailableMoneyTracker from "../features/AvailableMoneyTracker/AvailableMoneyTracker";
import {ROUTES} from "../common/enums/routes-enum";
import {PageNotFound} from "../common/components/404/404";
import {Saving} from "../features/Saving/Saving";
import {NewGoal} from "../features/Saving/NewGoal/NewGoal";


function App() {
    return (
        <div className="App">
            <Header/>
            <AvailableMoneyTracker/>
            <Routes>
                <Route path={"/"} element={<Main/>}></Route>
                <Route path={ROUTES.SPENDS} element={<Spends/>}></Route>
                <Route path={ROUTES.INCOME} element={<Income/>}></Route>
                <Route path={ROUTES.SAVINGS} element={<Saving/>}></Route>
                <Route path={ROUTES.NEW_GOAL} element={<NewGoal/>}></Route>
                <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound/>}></Route>
                <Route path={"/*"} element={<Navigate to={ROUTES.PAGE_NOT_FOUND}/>}></Route>
            </Routes>
        </div>
    );
}

export default App;


