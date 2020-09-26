import React, { FC } from "react";
import { WarningOutlined } from "@ant-design/icons";
import {
  colors,
  Section,
  SectionHeader,
  StyledParagraph
} from "./common";
import { Button } from "antd";

type NotFoundPageProps = {

}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  return (
    <Section style={{paddingTop: "100px", width: "60%", marginTop: "0px"}}>
      <SectionHeader title="Uh Oh!" num="404." />
      <div style={{textAlign: "center", fontSize: "128px"}} >
        <WarningOutlined style={{color: colors.secondary}} />
      </div>
      <StyledParagraph style={{textAlign: "center"}} >
        Seems you've stumbled somewhere you weren't supposed to!
      </StyledParagraph>
      <div style={{marginTop: "75px", display: "flex", justifyContent: "center"}}>
        <Button
          block
          href="/"
          style={{color: colors.highlight }}
          type="text"
        >
          This button will take you back to where you should be.
        </Button>
      </div>
    </Section>
  );
};