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
import {Redirect} from "../common/components/Header/Redirect/Redirect";


function App() {
    return (
        <div className="App">
            <div className="Container">
                <Header/>
                <AvailableMoneyTracker/>
                <Routes>
                    <Route path={"/"} element={<Main/>}></Route>
                    <Route path={ROUTES.SPENDS} element={<Spends/>}></Route>
                    <Route path={ROUTES.INCOME} element={<Income/>}></Route>
                    <Route path={ROUTES.SAVINGS} element={<Saving/>}></Route>
                    <Route path={ROUTES.NEW_GOAL} element={<NewGoal/>}></Route>
                    <Route path={ROUTES.GAME} element={<Redirect url={'https://anyagalkina.github.io/rock-paper-scissors-game-react/'} />}/>
                    <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound/>}></Route>
                    <Route path={"/*"} element={<Navigate to={ROUTES.PAGE_NOT_FOUND}/>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;


