import React, {ChangeEvent, useState, KeyboardEvent, FocusEvent} from "react";

type PropsType = {
    title: string;
    changeTitleName: (category: string) => void;
    className: string
}

const EditableSpan: React.FC<PropsType> = ({title, changeTitleName, className}) => {
    const [editMode, setEditMode] = useState(false);
    const [category, setCategory] = useState(title);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCategory(e.currentTarget.value);
    }

    const renameCategory = () => {
        debugger
        changeTitleName(category);
        setEditMode(false);
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            debugger
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
            />
            : <span
                className={className}
                onClick={onClickHandler
                }>{title}</span>
    );
};

export default EditableSpan;