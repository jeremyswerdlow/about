import React, { FC } from "react";
import { Section, SectionHeader, StyledText } from "../common";
import { Empty } from "antd";

type ProjectSectionProps = {
  projects: {
    header: string,
    underConstruction?: string,
  }
};

export const ProjectSection: FC<ProjectSectionProps> = (props) => {
    return (
        <Section>
            <SectionHeader title={props.projects.header} num="04."/>
            <Empty
                description={<StyledText>{props.projects.underConstruction}</StyledText>}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
        </Section>
    )
};