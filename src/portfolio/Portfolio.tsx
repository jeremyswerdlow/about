import styled from "@emotion/styled";
import React, { forwardRef, Ref, useState } from "react";

import { Section } from "../common";
import { colors, projects, ProjectStatus } from "../constants";
import { Badge } from "./Badge";
import { ProjectModal } from "./ProjectModal";

const PortfolioBody = styled.div``;

const PortfolioSection = styled(Section)`
  width: 70%;
  margin: auto;
`;

const PortfolioCard = styled.div`
  width: 90%;
  border-radius: 5px;
  padding: 15px;
  margin: auto;
  margin-bottom: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: ${colors.background};
  border: 1.5px solid transparent;
  background-color: ${colors.primary};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  user-select: none;

  transition: 1s ease;
  :hover {
    background-color: rgba(58, 58, 82, 0.7);
    color: ${colors.secondary};
    border-color: ${colors.secondary};
  }
`;

type PortfolioProps = {
  sectionId: string;
};

export const Portfolio = forwardRef(
  (props: PortfolioProps, ref: Ref<HTMLDivElement>) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalProject, setModalProject] = useState(projects.projectList[0]);

    const onModalClose = () => {
      setModalVisible(false);
    };

    const onProjectClicked = (project: {
      title: string;
      summary: string;
      link: string;
      image: JSX.Element;
      status: ProjectStatus;
    }) => {
      setModalProject(project);
      setModalVisible(true);
    };

    return (
      <PortfolioBody ref={ref}>
        <PortfolioSection sectionId={props.sectionId} header={projects.header}>
          <ProjectModal
            modalVisible={modalVisible}
            project={modalProject}
            onModalClose={onModalClose}
          />
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {projects.projectList.map((project) => (
              <PortfolioCard onClick={() => onProjectClicked(project)}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {project.image}
                    <span
                      style={{
                        margin: "0px",
                        paddingLeft: "10px",
                        fontSize: "16px",
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                  <Badge status={project.status} />
                </div>
              </PortfolioCard>
            ))}
          </div>
        </PortfolioSection>
      </PortfolioBody>
    );
  }
);
