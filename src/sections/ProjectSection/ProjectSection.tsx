import React, { forwardRef, Ref } from "react";
import { projectStatus, Section, SectionHeader } from "../../common";
import { ProjectScroller } from ".";

type ProjectSectionProps = {
  projects: {
    header: string,
    underConstruction?: string,
    projectList: {
      title: string,
      summary: string,
      link: string,
      image: {},
      status: projectStatus,
    }[],
  },
};

export const ProjectSection = forwardRef((props: ProjectSectionProps, ref: Ref<HTMLDivElement>) => {
  return (
      <Section ref={ref} style={{paddingTop: "100px"}} >
        <SectionHeader title={props.projects.header} num="04." />
        <ProjectScroller projects={props.projects.projectList} />
      </Section>
  )
});