import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Spends} from "./components/Spends/Spends";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Income from "./components/Income/Income";
import AvailableMoneyTracker from "./components/AvailableMoneyTracker/AvailableMoneyTracker";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";


function App() {
    const currentMoneySum = useSelector<AppRootStateType, number>(state => state.availableMoney.currentMoneySum);

    return (
        <div className="App">
            <Header/>
            <AvailableMoneyTracker currentMoneySum={currentMoneySum} />
            <Routes>
                <Route path={"/"} element={<Main/>}></Route>
                <Route path={"/spends"} element={<Spends/>}></Route>
                <Route path={"/income"} element={<Income/>}></Route>
            </Routes>
        </div>
    );
}

export default App;


