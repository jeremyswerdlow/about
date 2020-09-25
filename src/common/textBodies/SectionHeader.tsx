import React, { FC } from "react";
import { Divider, Typography } from "antd";
import { colors } from "..";

type SectionHeaderProps = {
  title: string,
  num?: string,
  orientation?: "left" | "center" | "right",
}

export const SectionHeader: FC<SectionHeaderProps> = (props) => {
  return (
    <Divider
      style={{display: "flex", justifyContent: "space-between"}}
      orientation={props.orientation || "left"}
    >
      {props.num &&
        <Typography.Text
          style={{
            color: colors.highlight,
            fontFamily: "'Roboto Mono'",
            fontSize: "20px",
            marginRight: "20px"
          }}
        >
          {props.num}
        </Typography.Text>
      }
      <Typography.Text
        style={{color: colors.primary, fontFamily: "'Roboto'", fontSize: "20px"}}
      >
        {props.title}
      </Typography.Text>
    </Divider>
  );
}