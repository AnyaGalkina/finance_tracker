import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Spends} from "./components/Spends/Spends";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Main/>}></Route>
                <Route path={"/spends"} element={<Spends/>}></Route>
                {/*<Route path={"/earnings"} element={<Earnings/>}></Route>*/}
            </Routes>
        </div>
    );
}

export default App;


