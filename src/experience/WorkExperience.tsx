import styled from "@emotion/styled";
import React, { FC, forwardRef, Ref, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { InfoBox, Section } from "../common";
import { colors, experience } from "../constants";
import { ExperienceModal } from "./ExperienceModal";

const WorkBody = styled.div``;

const WorkSection = styled(Section)`
  width: 80%;
  overflow-x: hidden;
  margin: auto;
`;

const JobLocation = styled.span`
  font-weight: bold;
`;

const JobTitle: FC<{
  job: {
    company: string;
    companyLink: string;
    title: string;
    location: string;
    start: string;
    end: string;
    points: string[];
    icon: JSX.Element;
  };
}> = (props) => {
  return (
    <h3
      className="vertical-timeline-element-title"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {props.job.title}&nbsp;&#x40;&nbsp;
      <span style={{ color: colors.highlight }}>{props.job.company}</span>
    </h3>
  );
};

type WorkExperienceProps = {
  sectionId: string;
};

export const WorkExperience = forwardRef(
  (props: WorkExperienceProps, ref: Ref<HTMLDivElement>) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalJob, setModalJob] = useState<{
      company: string;
      companyLink: string;
      title: string;
      location: string;
      start: string;
      end: string;
      points: string[];
      icon: JSX.Element;
    }>(experience.jobs[0]);

    const onTimelineClick = (job: {
      company: string;
      companyLink: string;
      title: string;
      location: string;
      start: string;
      end: string;
      points: string[];
      icon: JSX.Element;
    }) => {
      setModalJob(job);
      setModalVisible(true);
    };

    const onCloseModal = () => {
      setModalVisible(false);
    };

    return (
      <WorkBody ref={ref}>
        <WorkSection sectionId={props.sectionId} header={experience.header}>
          <ExperienceModal
            job={modalJob}
            modalVisible={modalVisible}
            onModalClose={onCloseModal}
          />
          <InfoBox style={{ marginBottom: "25px" }}>
            {experience.summary}
          </InfoBox>
          <VerticalTimeline layout="1-column">
            {experience.jobs.map((job) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: colors.primary,
                  color: colors.background,
                  boxShadow: "none",
                  userSelect: "none",
                  cursor: "pointer",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${colors.primary}`,
                }}
                date={`${job.start} - ${job.end}`}
                iconStyle={{
                  backgroundColor: colors.highlight,
                  color: colors.primary,
                }}
                icon={job.icon}
                onTimelineElementClick={() => onTimelineClick(job)}
              >
                <JobTitle job={job} />
                <div className="vertical-timeline-element-subtitle">
                  <JobLocation>{job.location}</JobLocation>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </WorkSection>
      </WorkBody>
    );
  }
);
