import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {GoalType} from './saving-reducer';
import {AppRootStateType} from '../../app/redux/store';
import {Gaol} from './Goal/Goal';
import {ROUTES} from '../../common/enums/routes-enum';
import styles from './Goal/Goal.module.css';
import plantImg from '../../assets/images/plant-growing.jpg';

export const Saving = () => {
    const goals = useSelector<AppRootStateType, Array<GoalType>>(state => state.saving);
    const navigate = useNavigate();

    const goalsAreShown = goals.length !== 0;

    const onAddGoalClickHandler = () => {
        navigate(ROUTES.NEW_GOAL)
    }

    return (
        <div>
            <div>
                <h2>MY GOALS</h2>

                {goalsAreShown
                    ? goals.map(g => {
                        return (
                            <Gaol key={g.goalId} goal={g}/>
                        )
                    })
                    : <div className={styles.startSavingContainer}>
                        <div>
                            <h3 style={{color: '#8797ad', marginTop:0}}>You don't have goals yet. Start saving now</h3>
                        </div>
                        <div className={styles.imgContainer} style={{backgroundImage: `url(${plantImg})`}}></div>
                    </div>

                }
                <Button style={{margin: '20px 0'}} onClick={onAddGoalClickHandler} variant={'contained'}>Add new
                    goal</Button>
            </div>
        </div>
    );
};
