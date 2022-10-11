import React, {ReactNode} from "react";
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import style from "./Modal.module.css"

type BasicModalType = {
    children: ReactNode;
    open: boolean;
    title: string;
    onCancelClickHandler: () => void;
    onSaveClickHandler: () => void;
    onClickOutsideHandler: () => void;
    buttonTitle: string;
    error: string
}

export const BasicModal = (props: BasicModalType) => {

    const {children, open, title, onSaveClickHandler, onCancelClickHandler, onClickOutsideHandler, buttonTitle, error} = props;

    return (
        <div >
        <Dialog open={open}>
            <DialogTitle>
                <Typography variant={"h6"}>
                    {title}
                </Typography>
            </DialogTitle>
            <DialogContent style={{padding: "20px"}} dividers>
                <>
                    {children}
                    <div className={style.buttonsBlock}>
                        <Button
                            variant="contained"
                            color="primary"
                            //@ts-ignore
                            disabled={error}
                            onClick={onSaveClickHandler}>
                            {buttonTitle}
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={onCancelClickHandler}>
                            Cancel
                        </Button>
                    </div>
                </>
            </DialogContent>
        </Dialog>
    </div>
    )
}