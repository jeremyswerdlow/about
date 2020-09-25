import React, { FC } from "react";
import { Button, Col, Modal } from "antd";
import { colors, projects, StyledParagraph, StyledTitle } from "../common";

type ProjectModalProps = {
  onClose: () => void,
  visible: boolean,
  title: React.ReactNode,
  projectInfo: {
    title: string,
    summary: string,
    link: string,
    image: React.ReactNode,
  },
};

export const ProjectModal: FC<ProjectModalProps> = (props) => {

  const title = (
    <StyledTitle style={{ marginBottom: "5px" }}>
      {props.title}
    </StyledTitle>
  );

  return (
    <Modal
      footer={null}
      onCancel={props.onClose}
      title={title}
      visible={props.visible}
      width="60%"
    >
      <Col>
        <StyledParagraph style={{ fontSize: "14px", paddingBottom: "10px" }}>
          {props.projectInfo.summary}
        </StyledParagraph>
        <Button
          block
          href={props.projectInfo.link}
          rel="noopener noreferrer"
          style={{color: colors.highlight }}
          type="text"
          target="_blank"
        >
          {projects.buttonText}
        </Button>
      </Col>
    </Modal>
  );
};