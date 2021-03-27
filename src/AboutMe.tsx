import styled from "@emotion/styled";
import React, { forwardRef, Ref } from "react";
import { FaAngleRight } from "react-icons/fa";

import { Paragraph, Section } from "./common";
import { about, colors } from "./constants";

const AboutBody = styled.div``;

const AboutParagraph = styled(Paragraph)`
  color: ${colors.accents};
  user-select: none;
  padding-bottom: 25px;
`;

const StyledSkillList = styled.div`
  columns: 3 auto;
`;

const StyledSkillListItem = styled.div`
  color: ${colors.primary};
  font-family: Roboto Mono;
  line-height: 1.6;
  user-select: all;
`;

const StyledListIcon = styled(FaAngleRight)`
  position: relative;
  top: 2px;

  padding-right: 15px;

  color: ${colors.highlight};
`;

type AboutMeProps = {
  sectionId: string;
};

export const AboutMe = forwardRef(
  (props: AboutMeProps, ref: Ref<HTMLDivElement>) => {
    return (
      <AboutBody ref={ref}>
        <Section
          sectionId={props.sectionId}
          header={about.header}
          style={{ margin: "auto" }}
        >
          {about.paragraphs.map((paragraph, index) => (
            <AboutParagraph key={index}>{paragraph}</AboutParagraph>
          ))}

          <AboutParagraph>{about.recentSkills.summary}</AboutParagraph>

          <StyledSkillList>
            {about.recentSkills.skills.map((skill, index) => (
              <StyledSkillListItem key={index}>
                <StyledListIcon />
                {skill}
              </StyledSkillListItem>
            ))}
          </StyledSkillList>
        </Section>
      </AboutBody>
    );
  }
);
