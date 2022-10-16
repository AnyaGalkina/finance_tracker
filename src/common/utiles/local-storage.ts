import {AppRootStateType } from "../../app/redux/store";

export const saveState = (state: AppRootStateType ) => {
    localStorage.setItem("state", JSON.stringify(state))
};

export const loadState = () => {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) {
        return undefined;
    }
    return JSON.parse(serializedState)
};