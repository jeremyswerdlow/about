import styled from "@emotion/styled";
import React, { FC } from "react";
import { FaMinus, FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";

import { colors } from "../constants";

const ModalHeader = styled.h1`
  margin: 0px;
  width: 100%;
  color: ${colors.primary};
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalSubHeader = styled.h3`
  margin: 0px 0px 10px 0px;
  width: 100%;
  color: ${colors.secondary};
  font-family: Roboto;
`;

const ModalCloseButton = styled(FaTimes)`
  height: 35px;
  width: 35px;
  color: ${colors.primary};
  :hover {
    cursor: pointer;
  }
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
        <ModalHeader>
          {props.job.title}
          <ModalCloseButton onClick={props.onModalClose} />
        </ModalHeader>
        <ModalSubHeader>
          <CompanyLink href={props.job.companyLink} target="_blank">
            {props.job.company}
          </CompanyLink>
          &#44;&nbsp;
          <CompanyLocation>{props.job.location}</CompanyLocation>
        </ModalSubHeader>
        {props.job.points.map((point) => (
          <div
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
    </ReactModal>
  );
};
