import React, { FC } from "react";
import { Button } from "antd";

type ButtonProps = {
  href?: string,
  style?: {},
  onClick?: () => void,
};

export const ClearTextButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      href={props.href}
      onClick={props.onClick}
      style={{
        ...props.style
      }}
    >
      {props.children}
    </Button>
  );
};