import React, { FC } from "react";
import { Tabs, Row, Divider, Badge, List } from "antd";
import { colors, SectionHeader, Section, StyledText, StyledParagraph } from "../common";

type StyledJobProps = {
  job: {
    company: string,
    companyLink?: string,
    title: string,
    location: string,
    start: string,
    end: string,
    points: string[],
  }
}

const StyledJob: FC<StyledJobProps> = (props) => {
  return (
    <>
      <Row>
        <StyledText style={{fontSize: "18px", color: colors.primary}} >
          {props.job.title}
        </StyledText>
        <Divider type="vertical" style={{fontSize: "32px", margin: "0px 15px"}} />
        <StyledText style={{fontSize: "18px", color: colors.highlight}} >
          <a
            href={props.job.companyLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {props.job.company}
          </a>
        </StyledText>
      </Row>
      <Row style={{fontSize: "14px", color: colors.secondary}} >
        {`${props.job.start} - ${props.job.end}`}
      </Row>
      <List
        dataSource={props.job.points}
        renderItem={(point) =>
          <List.Item style={{borderBottomWidth: "0px"}}>
            <List.Item.Meta
              avatar={ <Badge status="processing" />}
              description={
                <StyledParagraph style={{marginBottom: "0px"}} >
                  {point}
                </StyledParagraph>
              }
            />
          </List.Item>
        }
      />
    </>
  );
}

type ExperienceSectionProps = {
  experience: {
    header: string,
    jobs: {
      company: string,
      title: string,
      location: string,
      start: string,
      end: string,
      points: string[],
    }[],
  }
};

export const ExperienceSection: FC<ExperienceSectionProps> = (props) => {
  return (
    <Section>
      <SectionHeader title={props.experience.header} num="02." />
      <Tabs
        size="small"
        style={{marginTop: "25px", fontFamily: "'Roboto Mono'"}}
        tabPosition="left"
      >
        {
          props.experience.jobs.map((job) =>
            <Tabs.TabPane tab={job.company} key={job.company}>
              <StyledJob job={job} />
            </Tabs.TabPane>
          )
        }
      </Tabs>
    </Section>
  );
};