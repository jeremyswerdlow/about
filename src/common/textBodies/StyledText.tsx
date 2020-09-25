import React, { FC } from "react";
import { Typography } from "antd";
import { colors } from "..";

type StyledParagraphProps = {
  style?: {}
  ellipsis?: boolean
};

export const StyledParagraph: FC<StyledParagraphProps> = (props) => {
  return (
    <Typography.Paragraph
      ellipsis={props.ellipsis}
      style={{
        color: colors.secondary,
        fontFamily: "'Roboto'",
        fontSize: "16px",
        ...props.style,
      }}
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
      style={{
        color: colors.secondary,
        fontFamily: "'Roboto'",
        fontSize: "14px",
        ...props.style,
      }}
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
      style={{
        color: colors.primary,
        fontFamily: "'Roboto'",
        fontSize: "64px",
        ...props.style,
      }}
    >
      {props.children}
    </Typography.Title>
  )
}