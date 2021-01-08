import styled from "@emotion/styled";
import React, { FC } from "react";
import { FaGithubAlt, FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";

import { colors, projects, ProjectStatus } from "../constants";
import { Badge } from "./Badge";

const ModalHeader = styled.h1`
  margin: 0px;
  width: 100%;
  color: ${colors.primary};
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ModalHeaderIcon = styled.span`
  font-size: 50px;
  margin: 0px 25px;
  padding-top: 15px;
  color: ${colors.secondary};
`;

const ModalCloseButton = styled(FaTimes)`
  margin-left: auto;
  height: 35px;
  width: 35px;
  color: ${colors.primary};
  :hover {
    cursor: pointer;
  }
`;

const RepoLink = styled.button`
  margin: auto;
  position: absolute;
  bottom: 0;

  width: 55%;
  padding: 10px;
  border-radius: 5px;
  border: 1.5px solid ${colors.secondary};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
      <div
        onClick={props.onModalClose}
        style={{
          height: "100%",
          width: "100%",
          fontFamily: "Roboto",
          userSelect: "none",
        }}
      >
        <ModalHeader style={{ marginBottom: "0px" }}>
          <ModalHeaderIcon>{props.project.image}</ModalHeaderIcon>
          {props.project.title}
          <ModalCloseButton onClick={props.onModalClose} />
        </ModalHeader>
        <div
          style={{
            lineHeight: "1.6",
            margin: "auto",
            width: "80%",
            height: "80%",
            fontSize: "18px",
            position: "relative",
          }}
        >
          <Badge status={props.project.status} />
          <div style={{ marginTop: "10px" }}>{props.project.summary}</div>
          <RepoLink onClick={() => window.open(props.project.link, "_blank")}>
            <FaGithubAlt style={{ paddingRight: "10px" }} />
            {projects.buttonText}
          </RepoLink>
        </div>
      </div>
    </ReactModal>
  );
};
