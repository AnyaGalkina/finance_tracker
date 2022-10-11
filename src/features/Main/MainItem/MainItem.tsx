import React from "react";
import styles from "./MainItem.module.css";
import {useNavigate} from "react-router-dom";

type PropsType = {
    itemTitle: string;
    path: string;
    img: string
}

const MainItem: React.FC<PropsType> = ({itemTitle, path, img}) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(path)
    }

    return (
        <div className={styles.mainItemContainer} onClick={onClickHandler}>
            <div className={styles.title}>{itemTitle}</div>
            <div
                className={styles.mainItemBlock}
                style={{
                    backgroundImage: `url(${img})`, backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
            </div>
        </div>
    );
};

export default MainItem;