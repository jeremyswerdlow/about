import React, { FC } from "react";
import { Badge, Button, Col, Descriptions, Modal } from "antd";
import { colors, projects, projectStatus, StyledParagraph, StyledTitle } from "../common";

type ProjectModalProps = {
  onClose: () => void,
  visible: boolean,
  title: React.ReactNode,
  projectInfo: {
    title: string,
    summary: string,
    link: string,
    image: React.ReactNode,
    status: projectStatus,
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
      centered
      footer={null}
      onCancel={props.onClose}
      title={title}
      visible={props.visible}
      width="80%"
    >
      <Col>
        <Descriptions size="small">
          <Descriptions.Item label="Status" span={3}>
            <Badge status={props.projectInfo.status} />
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            <StyledParagraph style={{ fontSize: "14px", paddingBottom: "10px" }}>
              {props.projectInfo.summary}
            </StyledParagraph>
          </Descriptions.Item>
        </Descriptions>
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