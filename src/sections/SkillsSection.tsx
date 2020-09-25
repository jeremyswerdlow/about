import React, { forwardRef, Ref } from "react";
import { Col, Divider, List, Rate, Row } from "antd";
import { Section, SectionHeader, StyledText } from "../common";

type SkillsSectionProps = {
  skills: {
    header: string,
    ratingInfo: string,
  },
  ratings: {
    [key: string]: {
      [key: string]: number
    }
  },
};

export const SkillsSection = forwardRef((props: SkillsSectionProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Section ref={ref} style={{paddingTop: "100px"}} >
      <SectionHeader title={props.skills.header} num="03." />
      {
        Object.entries(props.ratings).map( ([skillGroup, groupRatings]) =>
          <div key={skillGroup}>
            <Divider orientation="right">{skillGroup}</Divider>
            <List
              dataSource={Object.entries(groupRatings)}
              grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 8 }}
              renderItem={ ([ name, rating ]) => (
                <List.Item><Col>
                  <Row><StyledText style={{ fontSize: "14px" }}>{name}</StyledText></Row>
                  <Row><Rate disabled defaultValue={rating} /></Row>
                </Col></List.Item>
              )}
            />
          </div>
        )
      }
    </Section>
  );
});