import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter} from "react-router-dom";
import {store} from "./app/redux/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <React.StrictMode>
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
    // </React.StrictMode>
);

reportWebVitals();
