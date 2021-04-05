import styled from "@emotion/styled";
import React, { FC } from "react";
import { FaGithubAlt } from "react-icons/fa";

import { Modal } from "../common";
import { colors, projects, ProjectStatus } from "../constants";
import { Badge } from "./Badge";

const ModalBody = styled.div`
  height: 100%;
  padding: 5% 0px;
  line-height: 1.6em;
`;

const RepoLink = styled.button`
  width: 456px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px;

  border-radius: 5px;
  border: 1.5px solid ${colors.secondary};

  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.secondary};
  background-color: transparent;

  transition: 0.75s ease;
  :hover {
    cursor: pointer;
    color: rgba(89, 113, 173, 0.7);
    border-color: rgba(89, 113, 173, 0.7);
    background-color: rgba(58, 58, 82, 0.2);
  }
`;

type ProjectModalProps = {
  modalVisible: boolean;
  onModalClose: () => void;
  project: {
    title: string;
    summary: string;
    link: string;
    image: JSX.Element;
    status: ProjectStatus;
  };
};

export const ProjectModal: FC<ProjectModalProps> = (props) => {
  const { modalVisible, onModalClose, project } = props;

  return (
    <Modal
      modalHeader={<>{project.title}</>}
      modalIcon={project.image}
      modalVisible={modalVisible}
      onModalClose={onModalClose}
    >
      <Badge status={project.status} />
      <ModalBody>{project.summary}</ModalBody>
      <RepoLink onClick={() => window.open(project.link, "_blank")}>
        <FaGithubAlt style={{ paddingRight: "10px" }} />
        {projects.buttonText}
      </RepoLink>
    </Modal>
  );
};
