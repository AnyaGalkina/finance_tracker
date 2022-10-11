import React, {ChangeEvent, useState, KeyboardEvent, memo} from "react";
import {TextField} from "@mui/material";

type PropsType = {
    title: string;
    changeTitleName: (category: string) => void;
    className: string;
    maxSymbols: number;
    label: string | null
}

const EditableSpan = memo(({title, changeTitleName, className, maxSymbols, label}: PropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [error, setError] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length <= maxSymbols) {
            setNewTitle(e.currentTarget.value);
            setError("");
        } else {
            setError("Max " + maxSymbols + " symbols")
        }
    }

    const renameCategory = () => {
        changeTitleName(newTitle);
        setEditMode(false);
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            renameCategory();
        }
    }

    const onBlurHandler = () => {
        renameCategory();
    }

    const onClickHandler = () => {
        setEditMode(true);
    }

    return (
        editMode
            ?
            <div className={className}>
                <TextField
                    label={label}
                    variant="standard"
                    size="small"
                    value={newTitle}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                    onBlur={onBlurHandler}
                    autoFocus
                />
                {error && <div style={{color: "red"}}>{error}</div>  }
            </div>
            : <span
                className={className}
                onClick={onClickHandler
                }>{title}</span>
    );
});

export default EditableSpan;