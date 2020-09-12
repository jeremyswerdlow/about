import React, { FC } from "react";
import { Button } from "antd";
import { StyledText } from "../textBodies";

type ButtonProps = {
  href?: string,
  onClick?: () => void,
  style?: {},
};

export const ClearTextButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      type="ghost"
      href={props.href}
      onClick={props.onClick}
      style={{
        borderRadius: "5px",
        borderWidth: "1.5px",
        ...props.style
      }}
    >
      <StyledText style={{color: "inherit"}}>
        {props.children}
      </StyledText>
    </Button>
  );
};