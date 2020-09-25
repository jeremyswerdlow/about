import React, { FC } from "react";
import { Card, List } from "antd";
import { StyledParagraph } from "../../common";
import { ProjectModal } from "../../modals";

type ProjectScrollItemProps = {
  project: {
    title: string,
    summary: string,
    link: string,
    image: {},
  }
};

export const ProjectScrollItem: FC<ProjectScrollItemProps> = (props) => {
  const [visible, setVisible] = React.useState(false);

  const openModal = () => {
    setVisible(true)
  };
  const closeModal = () => {
    setVisible(false)
  };

  const icon = (
    <a
      href={props.project.link}
      rel="noopener noreferrer"
      style={{margin: "auto"}}
      target="_blank"
    >
      {props.project.image}
    </a>
  );
  const title = <>{icon} {props.project.title}</>;

  const { project } = props
  return (
    <>
    <ProjectModal
      onClose={closeModal}
      projectInfo={project}
      title={title}
      visible={visible}
    >
      {project.image}
    </ProjectModal>
    <Card title={title} onClick={openModal} type="inner">
      <StyledParagraph ellipsis style={{fontSize: "14px", marginBottom: "0px"}}>
        {project.summary}
      </StyledParagraph>
    </Card>
    </>
  );
};

type ProjectScrollerProps = {
  projects: {
    title: string,
    summary: string,
    link: string,
    image: {},
  }[],
};

export const ProjectScroller: FC<ProjectScrollerProps> = (props) => {
  return (
    <List
      dataSource={props.projects}
      grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
      renderItem={project => (
        <List.Item>
          <ProjectScrollItem project={project} />
        </List.Item>
      )}
    />
  );
};