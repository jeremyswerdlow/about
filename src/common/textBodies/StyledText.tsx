import React, { FC } from "react";
import { Typography } from "antd";
import { colors } from "..";

type StyledParagraphProps = {
  style?: {}
};

export const StyledParagraph: FC<StyledParagraphProps> = (props) => {
  return (
    <Typography.Paragraph
      style={{fontFamily: "'Roboto'", fontSize: "16px", color: colors.secondary, ...props.style}}
    >
      {props.children}
    </Typography.Paragraph>
  );
}

type StyledTextProps = {
  style?: {}
};

export const StyledText: FC<StyledTextProps> = (props) => {
  return (
    <Typography.Text
      style={{fontFamily: "'Roboto'", fontSize: "14px", color: colors.secondary, ...props.style}}
    >
      {props.children}
    </Typography.Text>
  )
}

type StyledTitleProps = {
  style?: {}
};

export const StyledTitle: FC<StyledTitleProps> = (props) => {
  return (
    <Typography.Title
      style={{fontFamily: "'Roboto'", fontSize: "64px", color: colors.primary, ...props.style}}
    >
      {props.children}
    </Typography.Title>
  )
}