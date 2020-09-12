import React, { forwardRef, Ref } from "react";
import { Section, SectionHeader, StyledText } from "../common";
import { Empty } from "antd";

type ProjectSectionProps = {
  projects: {
    header: string,
    underConstruction?: string,
  }
};

export const ProjectSection = forwardRef((props: ProjectSectionProps, ref: Ref<HTMLDivElement>) => {
    return (
        <Section ref={ref} style={{paddingTop: "100px"}} >
            <SectionHeader title={props.projects.header} num="04."/>
            <Empty
                description={<StyledText>{props.projects.underConstruction}</StyledText>}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
        </Section>
    )
});