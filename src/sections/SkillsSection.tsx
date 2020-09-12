import React, { Ref, forwardRef } from "react";
import { Section, SectionHeader, StyledParagraph } from "../common";
import { Rate, Col, Row, Divider } from "antd";

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
        Object.entries(props.ratings).map(([skillGroup, groupRatings]) =>
        <div key={skillGroup}>
          <Divider orientation="right">{skillGroup}</Divider>
          <Row>
            {
              Object.entries(groupRatings).map(([name, rating]) =>
                <Col
                  key={name}
                  style={{
                    width: "calc(100%/3)",
                    marginBottom: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <StyledParagraph style={{width: "135px", margin: "0px auto"}}>{name}</StyledParagraph>
                  <Rate style={{margin: "auto"}} disabled defaultValue={rating}/>
                </Col>
              )
            }
          </Row>
        </div>
        )
      }
    </Section>
  );
});