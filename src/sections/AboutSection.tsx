import React, { FC, forwardRef, Ref } from "react";
import { Descriptions, Badge } from "antd";
import { Section, SectionHeader, StyledParagraph, StyledText } from "../common";

type AboutBodyProps = {
  paragraphs: string[]
}

const AboutBody: FC<AboutBodyProps> = (props) => {
  return (
    <>
      {
        props.paragraphs.map((paragraph: string) =>
          <div key={Math.random().toString(36).substring(7)}>
            <StyledParagraph>{paragraph}</StyledParagraph>
          </div>
        )
      }
    </>
  );
}

type AboutSectionProps = {
  about: {
    header: string,
    paragraphs: string[],
    recentSkills: {
      summary: string,
      skills: string[],
    }
  }
};

export const AboutSection = forwardRef((props: AboutSectionProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Section ref={ref} style={{paddingTop: "100px"}} >
      <Descriptions
        title={ <SectionHeader title={props.about.header} num="01." /> }
      >
        <Descriptions.Item span={3}>
          <AboutBody
            paragraphs={[...props.about.paragraphs, props.about.recentSkills.summary]}
          />
        </Descriptions.Item>
        {
          props.about.recentSkills.skills.map((skill: string) =>
            <Descriptions.Item span={1} key={`${skill}-recent`}>
              <Badge
                status="processing"
                text={
                  <StyledText style={{fontFamily: "'Roboto Mono'", marginLeft: "15px"}}>
                    {skill}
                  </StyledText>
                }
              />
            </Descriptions.Item>
          )
        }
      </Descriptions>
    </Section>
  );
});