import React, {ReactNode} from "react";
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import style from "./Modal.module.css"

type BasicModalType = {
    children: ReactNode;
    open: boolean;
    title: string;
    onCancelClickHandler: () => void;
    onSaveClickHandler: () => void;
    onClickOutsideHandler?: () => void;
    buttonTitle: string;
    error: string
}

export const BasicModal = (props: BasicModalType) => {

    const {children, open, title, onSaveClickHandler, onCancelClickHandler, buttonTitle, error} = props;

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

//  ,
//    {
//      "src": "/src/assets/images/goal/target.jpg",
//      "sizes": "500x333",
//      "type": "image/jpg"
//    },
//    {
//      "src": "/src/assets/images/goal/save.jpg",
//      "sizes": "500x500",
//      "type": "image/jpg"
//    },
//
//
//    {
//      "src": "/src/assets/images/incomeImg.jpg",
//      "sizes": "640x381",
//      "type": "image/jpg"
//    },
//    {
//      "src": "/src/assets/images/savingImg.jpg",
//      "sizes": "640x400",
//      "type": "image/jpg"
//    },
//    {
//      "src": "/src/assets/images/spends.jpg",
//      "sizes": "640x640",
//      "type": "image/jpg"
//    }
