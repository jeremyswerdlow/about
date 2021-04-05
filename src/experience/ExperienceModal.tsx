import styled from "@emotion/styled";
import React, { FC } from "react";
import { FaMinus } from "react-icons/fa";
import { Modal } from "../common";

import { colors } from "../constants";

const ModalSubHeader = styled.div`
  font-size: 20px;
  margin: 0px 0px 10px 0px;
  width: 100%;
  color: ${colors.secondary};
  font-family: Roboto;
`;

const CompanyLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${colors.secondary};
`;

const CompanyLocation = styled.span`
  font-weight: bold;
  color: ${colors.primary};
`;

type ExperienceModalProps = {
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
  modalVisible: boolean;
  onModalClose: () => void;
};

export const ExperienceModal: FC<ExperienceModalProps> = (props) => {
  const { job, modalVisible, onModalClose } = props;

  return (
    <Modal
      modalHeader={
        <>
          {job.title}
          <ModalSubHeader>
            <CompanyLink href={job.companyLink} target="_blank">
              {job.company}
            </CompanyLink>
            &#44;&nbsp;
            <CompanyLocation>{job.location}</CompanyLocation>
          </ModalSubHeader>
        </>
      }
      modalVisible={modalVisible}
      onModalClose={onModalClose}
    >
      <div style={{ height: "100%" }}>
        {job.points.map((point, index) => (
          <div
            key={index}
            style={{
              lineHeight: "1.2",
              margin: "auto",
              width: "90%",
              paddingTop: "25px",
              fontSize: "18px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ paddingRight: "25px" }}>
              <FaMinus fontSize="12px" />
            </div>
            {point}
          </div>
        ))}
      </div>
    </Modal>
  );
};
