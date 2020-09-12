import React, { FC } from "react";
import { Section, SectionHeader, colors, StyledParagraph, ClearTextButton } from "./common";
import { WarningOutlined } from "@ant-design/icons";

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
        <ClearTextButton href="/">
          This button will take you back to where you should be.
        </ClearTextButton>
      </div>
    </Section>
  );
};