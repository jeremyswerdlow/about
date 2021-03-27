import styled from "@emotion/styled";
import React, { forwardRef, Ref } from "react";
import { FaChevronDown } from "react-icons/fa";

import { Paragraph } from "./common";
import { colors, welcome } from "./constants";

const IntroBody = styled.div`
  width: 80%;
  max-width: 800px;
  height: 100vh;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Roboto, sans-serif;
  user-select: none;
`;

const IntroContent = styled.div``;

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
`;

const IntroGetStartedButton = styled(FaChevronDown)`
  font-size: 32px;
  font-weight: bolder;
  color: ${colors.highlight};

  padding-top: 24px;

  cursor: pointer;
`;

type IntroductionProps = {
  onClickGetStarted: () => void;
};

export const Introduction = forwardRef(
  (props: IntroductionProps, ref: Ref<HTMLDivElement>) => {
    const { onClickGetStarted } = props;

    return (
      <IntroBody ref={ref}>
        <IntroContent>
          <IntroGreeting>{welcome.greeting}</IntroGreeting>
          <IntroName>{welcome.name}</IntroName>
          <IntroStatement>{welcome.statement}</IntroStatement>
          <IntroSummary>{welcome.summary}</IntroSummary>
          <IntroGetStartedButton
            onClick={onClickGetStarted}
            className="bounce"
          />
        </IntroContent>
      </IntroBody>
    );
  }
);
