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

    return (
        <div
            className={styles.mainBlock}
             style={{
                 backgroundImage: `url(${img})`, backgroundPosition: "center",
                 backgroundSize: "cover",
             }}
             onClick={() => {
                 navigate(path)
             }}
        >{itemTitle}
        </div>
    );
};

export default MainItem;