import React, {ChangeEvent, useState, KeyboardEvent, memo} from "react";

type PropsType = {
    title: string;
    changeTitleName: (category: string) => void;
    className: string
}

const EditableSpan = memo(({title, changeTitleName, className}: PropsType) => {
    console.log("EditableSpan")
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value);
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
            ? <input
                className={className}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                onBlur={onBlurHandler}
                autoFocus
            />
            : <span
                className={className}
                onClick={onClickHandler
                }>{title}</span>
    );
});

export default EditableSpan;