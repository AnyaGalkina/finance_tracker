import React from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {GoalType} from "./saving-reducer";
import {AppRootStateType} from "../../app/redux/store";
import {Gaol} from "./Goal/Goal";
import {ROUTES} from "../../common/enums/routes-enum";

export const Saving = () => {
    const goals = useSelector<AppRootStateType, Array<GoalType>>(state => state.saving);
    const navigate = useNavigate();

    const onAddGoalClickHandler = () => {
        navigate(ROUTES.NEW_GOAL)
    }

    return (
        <div>
            <div>
                <h2>MY GOALS</h2>

                {goals.map(g => {
                    return (
                        <Gaol key={g.goalId} goal={g}/>
                    )
                })}


                <h3 style={{color: "#8797ad"}}>Start saving now</h3>
                <Button style={{marginBottom:"30px"}} onClick={onAddGoalClickHandler} variant={"contained"}>Add new goal</Button>
            </div>
        </div>
    );
};
