import styled from "@emotion/styled";
import React, { forwardRef, Ref } from "react";

import { Paragraph } from "./common";
import { colors, welcome } from "./constants";

const IntroBody = styled.div`
  width: 80%;
  padding: 175px 125px 100px;
  margin: auto;
  font-family: Roboto, sans-serif;
  user-select: none;
`;

const IntroGreeting = styled.h2`
  font-weight: normal;
  color: ${colors.highlight};
  font-family: Roboto Mono, monospace;
  margin: 0px;
`;

const IntroName = styled.h1`
  color: ${colors.primary};
  font-size: 64px;
  margin: 0px;
`;

const IntroStatement = styled.h1`
  color: ${colors.accents};
  font-size: 32px;
  margin: 0px 0px 50px;
`;

const IntroSummary = styled(Paragraph)`
  color: ${colors.accents};
  width: 50%;
`;

export const Introduction = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <IntroBody ref={ref}>
      <IntroGreeting>{welcome.greeting}</IntroGreeting>
      <IntroName>{welcome.name}</IntroName>
      <IntroStatement>{welcome.statement}</IntroStatement>
      <IntroSummary>{welcome.summary}</IntroSummary>
    </IntroBody>
  );
});
