import styled from "@emotion/styled";
import React, { FC } from "react";
import { FaGithubAlt, FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";

import { colors, projects, ProjectStatus } from "../constants";
import { Badge } from "./Badge";

const ModalContainer = styled.div`
  height: 80vh;

  width: 80vw;
  max-width: 1200px;

  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  font-family: Roboto;
`;

const ModalIcon = styled.span`
  font-size: 48px;
  margin: 0px 24px;
  padding-top: 16px;
  color: ${colors.secondary};
`;

const ModalContent = styled.div`
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  font-size: 16px;
`;

const ModalBody = styled.div`
  height: 100%;
  padding: 5% 0px;
  line-height: 1.6em;
`;

const ModalHeader = styled.h1`
  width: 100%;

  margin: 8px 0px;

  font-family: Roboto;
  font-size: 48px;
  color: ${colors.primary};
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

const ModalCloseButton = styled(FaTimes)`
  margin: 0px 24px;
  padding-top: 16px;

  font-size: 40px;
  color: ${colors.primary};

  transition: 1s ease;
  :hover {
    color: ${colors.highlight};
    cursor: pointer;
  }
`;

type ProjectModalProps = {
  project: {
    title: string;
    summary: string;
    link: string;
    image: JSX.Element;
    status: ProjectStatus;
  };
  modalVisible: boolean;
  onModalClose: () => void;
};

export const ProjectModal: FC<ProjectModalProps> = (props) => {
  return (
    <ReactModal
      isOpen={props.modalVisible}
      onRequestClose={props.onModalClose}
      closeTimeoutMS={1000}
      style={{
        overlay: {
          zIndex: 5,
          backdropFilter: "blur(0.75em)",
          backgroundColor: "rgba(0, 0, 0, 0.90)",
        },
        content: {
          fontFamily: "Roboto",
          color: colors.primary,
          borderColor: "transparent",
          backgroundColor: "transparent",
        },
      }}
    >
      <ModalContainer>
        <ModalIcon>{props.project.image}</ModalIcon>
        <ModalContent>
          <ModalHeader>{props.project.title}</ModalHeader>
          <Badge status={props.project.status} />
          <ModalBody>{props.project.summary}</ModalBody>
          <RepoLink onClick={() => window.open(props.project.link, "_blank")}>
            <FaGithubAlt style={{ paddingRight: "10px" }} />
            {projects.buttonText}
          </RepoLink>
        </ModalContent>
        <ModalCloseButton onClick={props.onModalClose} />
      </ModalContainer>
    </ReactModal>
  );
};
