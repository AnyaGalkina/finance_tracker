import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter} from "react-router-dom";
import {store} from "./app/redux/store";
import {Provider} from "react-redux";
import {theme} from "./app/theme";
import {ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </HashRouter>
);

reportWebVitals();
