import React, { FC } from "react";
import { Row, Typography } from "antd";
import { colors, StyledParagraph, StyledTitle } from "../common";

type WelcomeSectionProps = {
  welcome: {
    greeting: string,
    name: string,
    statement: string,
    summary: string,
  }
}

export const WelcomeSection: FC<WelcomeSectionProps> = (props) => {
  return (
    <div>
      <Row>
        <Typography.Text
          style={{fontFamily: "'Roboto Mono'", fontSize: "18px", color: colors.highlight}}
        >
          {props.welcome.greeting}
        </Typography.Text>
      </Row>
      <Row>
        <StyledTitle style={{"marginBottom": "10px"}}>{props.welcome.name}</StyledTitle>
      </Row>
      <Row>
        <StyledTitle style={{color: colors.secondary}}>{props.welcome.statement}</StyledTitle>
      </Row>
      <Row style={{width: "50%"}}>
        <StyledParagraph style={{marginTop: "10px"}}>{props.welcome.summary}</StyledParagraph>
      </Row>
    </div>
  );
}