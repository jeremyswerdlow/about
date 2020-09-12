import React, { FC } from "react";
import { Button } from "antd";

type ButtonProps = {
    onClick: () => void,
};

export const ClearTextButton: FC<ButtonProps> = (props) => {
    return (
        <Button type="ghost" onClick={props.onClick} >
            {props.children}
        </Button>
    );
};