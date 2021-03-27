import styled from "@emotion/styled";
import React, { FC } from "react";

import { colors } from "../constants";

type SectionProps = {
  hideBar?: boolean;
  sectionId?: string;
  header?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledSection = styled.div`
  height: 100%;

  width: 80%;
  max-width: 1200px;

  font-family: Roboto;
  background-color: transparent;

  padding-top: 15vh;
`;

const StyledDivider = styled.h2`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 25px 25px 0px 25px;
  user-select: none;

  ::before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${colors.highlight};
    margin: auto;
  }

  ::after {
    content: "";
    flex: 6 1;
    border-bottom: 1px solid ${colors.highlight};
    margin: auto;
  }
`;

const StyledSectionNumber = styled.span`
  padding: 15px 0px 15px 15px;
  font-family: Roboto Mono;
  color: ${colors.highlight};
`;

const StyledSectionTitle = styled.span`
  padding: 15px 15px 15px 10px;

  font-family: Roboto Mono;
  text-transform: capitalize;
  color: ${colors.primary};
`;

const StyledSectionBody = styled.div`
  padding: 0px 25px;
  color: ${colors.accents};
`;

export const Section: FC<SectionProps> = (props) => {
  return (
    <StyledSection {...props}>
      {!props.hideBar && (
        <StyledDivider>
          {props.sectionId && (
            <StyledSectionNumber>{props.sectionId}</StyledSectionNumber>
          )}
          <StyledSectionTitle>{props.header}</StyledSectionTitle>
        </StyledDivider>
      )}
      <StyledSectionBody>{props.children}</StyledSectionBody>
    </StyledSection>
  );
};
